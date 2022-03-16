import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function AdminNews(props) {

    const id = props.id;

    const onDelete =() => {
        if(window.confirm("Do you want to delete this")){
        axios.delete(`http://localhost:8000/deleteNews/${id}`).then((res) =>{
          alert("Deleted successfuly");
        })
    }
    else {
        alert("Record not deleted");
        }
      }
 
      return (

        <div className="card mb-3">
          <img className="card-img-top" alt="..." src={props.photo} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
            <button className="btn btn-success">
                <Link to={`/updateNews/${id}`} >Edit
                </Link>
                </button>
              &nbsp;
              <button className="btn btn-danger" onClick={onDelete}>
                <a className="btn btn-danger" >
                  Delete
                </a>

              </button>
            </p>
          </div>
        </div>

      );
    }

export default AdminNews;
