import React, { useEffect } from "react";
import { useState } from "react";

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

        <div className="card mb-3">
          <img className="card-img-top" alt="..." src={news.photo} />
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <button className="btn btn-success">
                <a className="btn btn-success" a href="">Edit</a>
              </button>
              &nbsp;
              <button className="btn btn-danger">
                <a className="btn btn-danger" href="" onClick="">
                  Delete
                </a>

              </button>
            </p>
          </div>
        </div>

      );
    });
  };

  return (
    <div>
      <button className="btn btn-llight">
        <a href="/addNews" className="btn btn-primary">Add News </a> &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/dashboard" className="btn btn-primary">Dashboard </a>
      </button>
      <div class="card-columns">{newsComponent()}</div>
    </div>
  );
}

export default News;
