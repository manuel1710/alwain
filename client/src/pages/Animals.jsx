import React, { useState, useEffect } from "react";
import "../App.css";
import { storage } from "../firebase.js";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Animals() {
  const [imageList, setImageList] = useState([]);
  const [imageName, setImageName] = useState([]);
  const imageListRef = ref(storage, "animals/");
  const folders = ["people", "places", "food", "animals"];

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
          setImageName((prev) => [...prev, item.name]);
        });
      });
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <div className="filterItems">
          <ul className="row">
            <li className="col p-3">
              <button
                className="text-uppercase"
                onClick={() => {
                  window.location.href = "/gallery";
                }}
              >
                All
              </button>
            </li>
            {folders.map((item, i) => (
              <li key={i} className="col p-3">
                <button
                  className="text-uppercase btn-success"
                  onClick={() => {
                    window.location.href = `/${item}`;
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          {/* {console.log('hi')} */}
          {imageName.map((name, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 bord p-1">
                <img className="w-100 p-1" src={imageList[i]} />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Animals;
