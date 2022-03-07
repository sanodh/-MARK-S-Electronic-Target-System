import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import { auth, db, logout, registerWithEmailAndPassword } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "firebase/database";

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();


    const profile = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
            setemail(data.email);
            setpassword(data.password);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };



    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    }, [user, loading]);


    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                        <span class="font-weight-bold">{name}</span>
                        <span class="text-black-50">{email}</span>
                        <span></span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" onChange={(e) => setName(e.target.value)} value={name} /></div>
                            <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname" /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" /></div>
                            <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1" /></div>
                            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                            <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" onChange={(e) => setpassword(e.target.value)} placeholder="enter Password" value={password} /></div>
                            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" onChange={(e) => setemail(e.target.value)} placeholder="enter email id" value={email} /></div>
                            <div class="col-md-12"><label class="labels">School/Club Name</label><input type="text" class="form-control" placeholder="enter your school or club name" /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={profile}>Save Profile</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                        <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
