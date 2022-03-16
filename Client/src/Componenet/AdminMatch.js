import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function AdminMatch(props) {
    const [match, setMatch] = useState([]);

    const id = props.id;

    useEffect(() => {
        fetch("http://localhost:8000/getMatch")
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setMatch(responseData);
            });
        console.log(match);
    }, []);

    const onDelete = () => {
        if (window.confirm("Do you want to delete this")) {
            axios.delete(`http://localhost:8000/deleteMatch/${id}`).then((res) => {
                alert("Deleted successfuly");
            })
        }
        else {
            alert("Record not deleted");
        }
    }

    const matchComponent = () => {
        return match.map((match) => {
            return (
                <div className="card mb-3" >
                    <div className="card-body">
                        <h5 className="card-title" class="text-center">{match.matchname}</h5>
                        <p className="card-text" class="text-center">{match.description}</p>
                        <p className="card-text" class="text-center">
                            <small className="text-muted" >Join Now</small>
                        </p>
                    </div>
                    <div class="col text-center">
                        <button className="btn btn-success">
                            <Link to={`/updateMatch`} className="btn btn-success">Edit
                            </Link>
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={onDelete}>
                            <a className="btn btn-danger" >
                                Delete
                            </a>
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            );
        });
    };

    return <div class="card-columns">{matchComponent()}</div>;
}

export default AdminMatch;
