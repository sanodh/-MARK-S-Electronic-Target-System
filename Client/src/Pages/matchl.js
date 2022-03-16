import React, { useEffect, useState } from "react";
import "../css/matchl.css";
import "firebase/database";

function Matchl() {

    return (
        <div className="container">
            <form className="form" >
                <h2 className="text-center">Login to match</h2>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Match ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="matchid"
                        required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required />
                </div>

                <button type="submit" className="submit">Login to match</button>
                <button className="su2" ><a href="/dashboard" className="su2">Back to Dashbord</a></button>
            </form>
        </div>
    );
}

export default Matchl;
