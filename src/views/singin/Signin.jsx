import React from "react";
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import Vector1 from '../../assets/images/vector1.jpg';

const SignIn = () => {


    return <div className="signincontainer">
        <div className="signinheader">
            <h2>SIGN IN</h2>

        </div>
        <div className="signin_infoDiv">
            <div className="textinfoDiv">
                <form action="" className="infoform">
                    <input type="text" placeholder="NAME" className="clientinfoinput" />
                    <input type="password" placeholder="PASSWORD" className="clientinfoinput" />
                    <input type="submit" value="SIGN IN" className="creataccount" />
                    <a href="/signup" >CREAT NEW ACCOUNT</a>

                    <a href="/profile" >CLIENT (TEMPORARY)</a>
                    <a href="/instructorprofile" >INSTRUCTOR (TEMPORY)</a>
                    <img src={Vector1} alt="Vector1" className="signin_vector" />
                </form>


            </div>

        </div>

    </div>
}
export default SignIn;