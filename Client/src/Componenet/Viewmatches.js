import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Viewmatches() {
    const [match, setMatch] = useState([]);

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
                            <Link to={"/matchl"} className="btn btn-success">Join Now
                            </Link>
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

export default Viewmatches;
