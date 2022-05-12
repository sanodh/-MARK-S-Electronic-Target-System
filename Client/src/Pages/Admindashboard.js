import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import News from "../Componenet/News";

function AdminDashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
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
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" style={{ color: 'primary' }}>
                <a href="/news" class="text-decoration-none text-black">News</a></button>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" >
                <a href="/leaderboard" class="text-decoration-none text-black">Leaderboard</a></button>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" >
                <a href="/mprofile" class="text-decoration-none text-black">Manage Profile</a></button>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" >
                <a href="/addMatch" class="text-decoration-none text-black">Add Match</a></button>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" >
                <a href="/match" class="text-decoration-none text-black">Manage Match</a></button>
            <button type="button" class="btn btn-outline-warning btn-lg btn-block" >
                <a href="/dashboard" class="text-decoration-none text-black">Dashboard</a></button>
            <button type="button" class="btn btn btn-outline-danger btn-lg btn-block" onClick={logout}>Log Out</button>

        </div >
    );
}

export default AdminDashboard;
