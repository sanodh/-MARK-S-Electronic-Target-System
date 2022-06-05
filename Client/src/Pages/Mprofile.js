import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { axios } from "axios";

function Mprofile() {
    const [profile, setprofile] = useState([]);
    const Params = useParams();

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

    // const onDelete = () => {
    //     if (window.confirm("Do you want to delete this")) {
    //         axios.delete(`http://localhost:8000/deleteMatch/${Params.id}`).then((res) => {
    //             alert("Deleted successfuly");
    //         })
    //     }
    //     else {
    //         alert("Record not deleted");
    //     }
    // }

       
            return (
                <div>
                <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 align="center"><span className="badge badge-primary" >User Profiles</span></h1>
                <br></br>
                        <br></br>
                        <div>
                <table  className="table table-dark">
                    <tr>
                        <td align="center">Name</td>
                        <td align="center">Action</td>
                    </tr>
                    {
                    profile.map(profile=>{
                    return (<tr>
                          <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fa-solid fa-user">&emsp;&emsp;</i>{profile.name}&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td><Link className="nav-link" to={`/profileDetails/${profile.name}`} >&emsp;&emsp;&emsp;&emsp;&emsp;View Details&emsp;&emsp;<i class="fa-solid fa-angles-right">&emsp;&emsp;&emsp;&emsp;&emsp;</i>
                        </Link></td>
                    </tr>);
    
                })
            }
                   
                            </table>
                            </div>
                <br></br>
                <br></br>
                        <br></br>
                        <div align="center">
                            <button className="btn btn-success btn-lg"><span><a href="/dashboard" className="text-decoration-none text-white">Dashboard&emsp;&emsp;<i class="fa-solid fa-house"></i></a></span></button>
                            </div>
                <br></br><br></br>
            </div>
               </div>

                    )}

export default Mprofile;