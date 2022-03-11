import React from "react";
import { useState } from "react";
import axios from 'axios';

function AddNews() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");



  let data = {
    title: title,
    photo: photo,
    description: description,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8000/createNews", data);
      if (res.status === 200) {
        console.log(data);
        alert("News created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div class="container">
      <form class="form" onSubmit={handleSubmit}>
        <div class="title">Update News</div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Photo URL</label>
          <input
            type="text"
            class="form-control"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required></textarea>
        </div>

        <button type="submit" class="submit">Update News</button>
        <button class="su2" ><a href="/dashboard" class="su2">Back to Dashbord</a></button>
      </form>
    </div>


  );
}

export default AddNews;

