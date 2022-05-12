import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Dashboard from "./Pages/Dashboard";
import AddNews from "./Componenet/addNews";
import AddMatch from "./Componenet/addMatch";
import Profile from "./Pages/profile";
import Leaderboard from "./Pages/leaderboard";
import Vprofile from "./Pages/Vprofile";
import Viewmatches from "./Componenet/Viewmatches";
import Adminmatch from "./Componenet/AdminMatch";
import Mprofile from "./Pages/Mprofile";
import Matchl from "./Pages/matchl";
import News from "./Pages/News";
import UpdateNews from "./Componenet/updateNews";
import Admindashboard from "./Pages/Admindashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addNews" element={<AddNews />} />
          <Route exact path="/addMatch" element={<AddMatch />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/vprofile/:id" element={<Vprofile />} />
          <Route exact path="/viewmatches" element={<Viewmatches />} />
          <Route exact path="/adminmatch" element={<Adminmatch />} />
          <Route exact path="/mprofile" element={<Mprofile />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/matchl" element={<Matchl />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/updateNews/:id" element={<UpdateNews />} />
          <Route exact path="/admindashboard" element={<Admindashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
