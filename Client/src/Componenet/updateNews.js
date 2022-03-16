import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const UpdateNews = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [news, setNews] = useState([]);

  const params = useParams();
  console.log(params.id)

  function retriewData() {
    fetch(`http://localhost:8000/news/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNews(responseData);
      });
  }

  retriewData();


  let data = {
    title: title,
    photo: photo,
    description: description,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`http://localhost:8000//updateNews/${params.id}`, data);
      if (res.status === 200) {
        console.log(data);
        alert("News updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Update News</div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            className="form-control"
            id="title"
            defaultValue={news.title}
            onChange={(e) => setTitle(e.target.defaultValue)}
            required />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Photo URL</label>
          <input
            type="text"
            className="form-control"
            id="photo"
            defaultValue={news.photo}
            onChange={(e) => setPhoto(e.target.defaultValue)}
            required />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            defaultValue={news.description}
            onChange={(e) => setDescription(e.target.defaultValue)}
            required></textarea>
        </div>

        <button type="submit" className="submit" >Update News</button>
        <button className="su2" ><a href="/dashboard" className="su2">Back to Dashbord</a></button>
      </form>
    </div>

  );
}

export default UpdateNews;

