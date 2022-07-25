import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import {Buffer} from 'buffer';
// import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
  const url = 'http://localhost:5000/file/upload';
  // const url = "https://alwainserver.herokuapp.com/file/upload";
  const [imageList, setImageList] = useState([]);
  const [imageName, setImageName] = useState([]);
  // const [itemName, setItemName] = useState([]);
  var itemName ='';
  var deleteName = '';
  var deleteDate ='';
  var deleteFileName = '';
  const folders = ["school", "work", "hospital", "laboratory", "freelance"];

  const [data, setData] = useState([]);

  function getAll() {
    axios
      .get(url,{params:{tag: ''}})
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }

  function getFolder() {
    axios
      .get(url, {params:{tag: itemName}})
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }
  function deleteFile() {
    axios
      .delete(url, {params:{name: deleteName, uploadDate:deleteDate, filename:deleteFileName}})
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
      
  }

  useEffect(() => {
    getAll();
    getFolder();
    deleteFile();
  }, []);


  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <div className="filterItems">
          <ul className="row">
            <li className="col p-3">
              <button className="text-uppercase" onClick={getAll}>
                All
              </button>
            </li>
            {folders.map((item, i) => (
              <li key={i} className="col p-3">
                <button
                  className="text-uppercase btn-success"
                  onClick={()=>{
                    itemName = item;
                    getFolder();

                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          {data.map((singleData,i) => {
            var base64String1 = Buffer.from(singleData.img.data.data, 'utf8').toString('base64');
            return (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 bord p-1 text-center">
                {/* <SRLWrapper> */}
                <img className="w-100 p-1" src={`data:${singleData.img.contentType};base64,${base64String1}`} width="300" />
                {/* </SRLWrapper> */}
                <span>{`Name of File: ${singleData.name}`}</span>
                <br />
                <span>{`Uploaded on: ${singleData.uploadDate}`}</span>
                <button className="btn btn-primary" onClick={()=>{
                  deleteName = singleData.name;
                  deleteDate = singleData.uploadDate;
                  deleteFileName = singleData.originalname;
                  deleteFile();
                  alert('File has been Deleted');
                  window.location.href = "/gallery";
                }}> Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
