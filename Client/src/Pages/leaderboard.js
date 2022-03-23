import React, { useEffect, useState } from "react";
import "../css/leaderboard.css";
import "firebase/database";

function Leaderboard() {



    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;Leaderboard</h1>
                <br></br>
                <br></br>
                <table id="Shooter">
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Shot 1 to 10</th>
                        <th>Shot 10 to 20</th>
                        <th>Shot 20 to 30</th>
                        <th>Shot 30 to 40</th>
                        <th>Shot 40 to 50</th>
                        <th>Shot 50 to 60</th>
                        <th>Shot 7</th>
                        <th>Shot 8</th>
                        <th>Shot 9</th>
                        <th>Shot 10</th>
                        <th>Final Score</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button class="button" ><span><a href="/dashboard">Dashboard</a></span></button>
                <br></br><br></br>
            </div>
        </div>
    );
}

export default Leaderboard;
