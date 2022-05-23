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

    const onDelete = () => {
        if (window.confirm("Do you want to delete this")) {
            axios.delete(`http://localhost:8000/deleteMatch/${Params.id}`).then((res) => {
                alert("Deleted successfuly");
            })
        }
        else {
            alert("Record not deleted");
        }
    }

       
            return (
               <div>
                    <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;User Profiles</h1>
                <br></br>
                <br></br>
                <table id="Shooter">
                    <tr>
                        <td>Name</td>
                        <td>Action</td>
                    </tr>
                    {
                    profile.map(profile=>{
                    return (<tr>
                          <td>{profile.name}</td>
                          <td><Link className="nav-link" to={`/profileDetails/${profile.name}`} >View Details
                        </Link></td>
                    </tr>);
    
                })
            }
                   
                </table>
                <br></br>
                <br></br>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button class="button" ><span><a href="/dashboard">Dashboard</a></span></button>
                <br></br><br></br>
            </div>
               </div>

                    )}

export default Mprofile;