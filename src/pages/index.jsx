import React, { useState } from "react";
import "../App.css";
import { storage } from "../firebase.js";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Navbar from "../components/Navbar";

function Home() {
  const [imageUpload, setImageUpload] = useState(null);
  const [folderName, setFolderName] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) {
      alert("No Image Selected");
      return;
    }
    if (folderName == null) {
      alert("No Folder Selected");
      return;
    }
    const imageRef = ref(storage, `${folderName}/${Date()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
      //   window.location.reload(false);
      window.location.href = "/gallery";
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row text-center">
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <label className="p-5">
            Pick Folder to Upload Photo to:
            <select
              required
              defaultValue={"default"}
              onChange={(event) => {
                setFolderName(event.target.value);
                console.log(event.target.value);
              }}
            >
              <option value={"default"} disabled>
                Choose an option
              </option>
              <option value="food">Food</option>
              <option value="animals">Animals</option>
              <option value="places">Places</option>
              <option value="people">People</option>
            </select>
          </label>
          <div className="p-5">
            <button className="w-75 btn-primary" onClick={uploadImage}>
              Upload Image
            </button>
          </div>

          {/* <h1>Hi</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
