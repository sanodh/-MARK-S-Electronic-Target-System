import React, { useEffect, useState } from "react";
import "../css/leaderboard.css";
import "firebase/database";
import { useParams } from "react-router-dom";



function Score() {

    const params = useParams();

    const [Score, setScore] = useState([]);
    
    useEffect(() => {
        fetch(`https://fir-web-9dd79-default-rtdb.firebaseio.com/AAA/${params.id}.json`)
          .then(response => response.json())
          .then((responseData) => {
            setScore(responseData);
          });
        console.log(Score);
      }, []);


    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Score Card</h1>
                <br></br>
                <br></br>
                <table id="Shooter">
                    <tr>
                        <td>Score</td>
                        <td>Image</td>
                    </tr>
                    {
                    Score.map(score=>{
                    return (<tr>
                          <td>{score.score}</td>
                        <td><a href={score.img}> <img src={score.img} style={{height:"60px", width:"60px"}} ></img></a></td>
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
    );
}

export default Score;
