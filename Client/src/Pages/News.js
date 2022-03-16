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
      <button className="btn btn-llight">
        <a href="/addNews" className="btn btn-primary">Add News </a> &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/dashboard" className="btn btn-primary">Dashboard </a>
      </button>
      <div className="card-columns">{newsComponent()}</div>
    </div>
  );
}

export default News;
