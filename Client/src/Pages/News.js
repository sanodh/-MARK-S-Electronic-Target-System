import React, { useEffect } from "react";
import { useState } from "react";
import AdminNews from "../Componenet/adminNews";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getNews")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNews(responseData);
      });
    console.log(news);
  }, []);


  const newsComponent = () => {
    return news.map((news) => {
      return (

        <div><AdminNews key={news.id} id={news.id} title={news.title} photo={news.photo} description={news.description} /></div>

      );
    });
  };

  return (
    <div>
      <br></br>
      <button type="button" class="btn btn-primary btn-lg btn-block" >
        <a href="/addNews" class="text-decoration-none text-white">Add News</a></button>
      <button type="button" class="btn btn-primary btn-lg btn-block" >
        <a href="/dashboard" class="text-decoration-none text-white">Dashboard</a></button>
      <br></br>
      <br></br>
      <div className="card-columns" class="mx-auto">{newsComponent()}</div>
    </div>
  );
}

export default News;
