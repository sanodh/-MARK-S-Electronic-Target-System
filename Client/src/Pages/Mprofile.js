import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Mprofile() {
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getProfile")
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setprofile(responseData);
            });
        console.log(profile);
    }, []);

    const MprofileComponent = () => {
        return profile.map((profile) => {
            return (
                <div>
                    <section class="section about-section gray-bg" id="about">
                        <div class="container">
                            <div class="row align-items-center flex-row-reverse">
                                <div class="col-lg-6">
                                    <div class="about-text go-to">
                                        <h3 class="dark-color">About Me</h3>
                                        <h6 class="theme-color lead">{profile.name}</h6>
                                        <p>I am {profile.description} </p>
                                        <div class="row about-list">
                                            <div class="col-md-6">
                                                <div class="media">
                                                    <label>Name</label>
                                                    <p>{profile.name}</p>
                                                </div>
                                                <div class="media">
                                                    <label>Age</label>
                                                    <p>{profile.age}</p>
                                                </div>
                                                <div class="media">
                                                    <label>Country</label>
                                                    <p>{profile.country}</p>
                                                </div>
                                                <div class="media">
                                                    <label>State</label>
                                                    <p>{profile.state}</p>
                                                </div>
                                                <div class="media">
                                                    <label>Address</label>
                                                    <p>{profile.address}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="media">
                                                    <label>E-mail</label>
                                                    <p>{profile.email}</p>
                                                </div>
                                                <div class="media">
                                                    <label>Phone</label>
                                                    <p>{profile.mobileNum}</p>
                                                </div>
                                                <div class="media">
                                                    <label>Club</label>
                                                    <p>{profile.organization}</p>
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <button className="btn btn-success">
                                                    <Link to={`/updateProfile`} className="btn btn-success">Edit
                                                    </Link>
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-danger" >
                                                    <a className="btn btn-danger" >
                                                        Delete
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="about-avatar">
                                        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png" title="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="counter">
                                <div class="row">
                                    <div class="col-6 col-lg-6">
                                        <div class="count-data text-center">
                                            <h6 class="count h2" data-to="500" data-speed="500">Name</h6>
                                            <p class="m-0px font-w-600">{profile.name}</p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-6">
                                        <div class="count-data text-center">
                                            <h6 class="count h2" data-to="150" data-speed="150">email</h6>
                                            <p class="m-0px font-w-600">{profile.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        });
    };

    return <div>{MprofileComponent()}</div>;
}

export default Mprofile;
