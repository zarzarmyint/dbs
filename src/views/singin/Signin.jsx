import React, { useState } from "react";
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import Vector1 from '../../assets/images/vector1.jpg';

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const signinClick = () => {
        if (username === "user" && password === "1234") {
            navigate('/profile');
        }
    };

    return <div className="signincontainer">
        <div className="signinheader">
            <h2>SIGN IN</h2>

        </div>
        <div className="signin_infoDiv">
            <div className="textinfoDiv">
                <form action="" className="infoform">
                    <input type="text" placeholder="NAME" className="clientinfoinput" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="PASSWORD" className="clientinfoinput" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="SIGN IN" className="creataccount" onClick={signinClick} />
                    <a href="/signup" >CREATE NEW ACCOUNT</a>

                    <img src={Vector1} alt="Vector1" className="signin_vector" />
                </form>
            </div>

        </div>

    </div>
}
export default SignIn;