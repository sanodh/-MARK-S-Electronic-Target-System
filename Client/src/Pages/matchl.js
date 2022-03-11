import React, { useEffect, useState } from "react";
import "../css/matchl.css";
import "firebase/database";

function Matchl() {

    return (
        <div>
            <body>
                <div class="form">
                    <form action="#" autocomplete="on">
                        <h1 id="login">Login To Match</h1>
                        <div class="inputdata">
                            <div id="matchinfo">
                                <i id="icon" class="im im-mail"></i>
                                <input id="match" type="text" placeholder="Match ID" required />
                            </div>
                            <div id="passwordinfo">
                                <i id="icon" class="im im-lock"></i>
                                <input id="password" type="password" placeholder="Password" required />
                            </div>
                        </div>
                        <button id="submit">Login</button>
                        <button id="submit"><a href="/dashboard" class="text-decoration-none">Dashboard</a></button>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Matchl;
