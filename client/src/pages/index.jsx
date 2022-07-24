import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

function Home() {
  const [imageUpload, setImageUpload] = useState(null);
  const [folderName, setFolderName] = useState(null);

  const uploadImage = async (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);

    if (imageUpload == null) {
      alert("No Image Selected");
      return;
    }
    if (folderName == null) {
      alert("No Folder Selected");
      return;
    }
    
    

    const url = "http://localhost:5000/file/upload";
    try{
      // const resp = await axios.post(url, file, {name:name,folder:folder,uploadDate: Date.toString()});
      const resp = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert('File has been Uploaded');
      window.location.href = "/gallery";
    }
    catch(err){
      console.log(err.response);
    }
    




  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="m-auto">
          <form encType="multipart/form-data" onSubmit={(event) => uploadImage(event)}>
            <div className="row text-center">
              <div className="mb-3">
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <label htmlFor="file" className="btn-danger m-3">Choose File to Upload</label>
              </div>

              <input type="text" placeholder="Name your File" id="name" name="name"/>

              <label className="p-5">
                Pick Folder to Upload Photo to:
                <select
                  required
                  defaultValue={"default"}
                  name="folder"
                  id="folder"
                  onChange={(event) => {
                    setFolderName(event.target.value);
                  }}
                >
                  <option value={"default"} disabled>
                    Choose an option
                  </option>
                  <option value="school">School</option>
                  <option value="work">Work</option>
                  <option value="hospital">Hospital</option>
                  <option value="laboratory">Laboratory</option>
                  <option value="freelance">Freelance</option>
                </select>
              </label>
              <div className="p-5">
                <button className="w-75 btn-primary">
                  Upload Image
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
