import React from "react";
import './Login.css';




const Login = () => {

    // This line of code for controlling button only nothing else

    const show = () => {
        let x = document.getElementById("show");
        let y = document.getElementById("alredy-user-btn");
        x.style.display = "block";
        y.style.display = "block";
    }
    const hide = () => {
        let y = document.getElementById("alredy-user-btn");
        let x = document.getElementById("show");
        x.style.display = "none";
        y.style.display = "none";

    }
    
    // This line of code for rendering the actual llogin page.....

    return (
        <>
            <div className="mian-login-cont">  {/* creted main container having two compartment*/}
                <div className="left-side-cont">    {/* this one fisrt compar tment for your project title detail's*/}
                    <div className="app-name-logo">
                        Put your App name
                    </div>
                    <div >
                        <button className="new-user-btn" onClick={show}>New User</button>
                    </div>
                </div>
                <div className="right-side-cont">   {/* this one second compartment for user login details*/}
                    <h2>Sign In</h2>
                    <div className="details-of-user">
                        <input type="email" placeholder=" Username / Email" />
                        <br />
                        <input type="password" placeholder="Password" />
                        <br />
                        <div className="extra" id="show">
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <button type="submit"> Cnotinue </button>
                    </div>
                    <button onClick={hide} className="Alredy-sign-in-user-btn" id="alredy-user-btn">Alredy User</button>
                </div>
            </div>
        </>
    )
}

export default Login;