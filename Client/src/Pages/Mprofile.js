import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Mprofile() {
    const [profile, setprofile] = useState([]);
    const params = useParams();
    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(profile);
    const [tableFilter, setTableFilter] = useState([]);

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

    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setDataSource([...profile])
        }
    }

    
       
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
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={value}
                                    onChange={filterData}
                                />
                            </div>
                <table  className="table table-dark">
                    <tr>
                        <td align="center">Name</td>
                        <td align="center">Action</td>
                    </tr>
                    {value.length > 0 ? tableFilter.map((profile)=>{
                    return (<tr>
                          <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fa-solid fa-user">&emsp;&emsp;</i>{profile.name}&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td><Link className="nav-link" to={`/profileDetails/${profile.name}`} >&emsp;&emsp;&emsp;&emsp;&emsp;View Details&emsp;&emsp;<i class="fa-solid fa-angles-right">&emsp;&emsp;&emsp;&emsp;&emsp;</i>
                        </Link></td>
                    </tr>);
    
                    }) 
                    :
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
