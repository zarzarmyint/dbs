import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa";

const SignUp = () => {
    const [activeDiv, setActiveDiv] = useState('client');



    return <div className="signupcontainer">
        <div className="signupheader">
            <h2>SING UP</h2>
        </div>

        <div className="signupinfoDiv">
            <div className="textinfoDiv">
                {/* <div className="accountType">
                    <input type="radio" value="Client" name="accountType" defaultChecked checked={activeDiv === 'client'}
                        onChange={() => setActiveDiv('client')} /> CLIENT
                    <input type="radio" value="Instructor" name="accountType" checked={activeDiv === 'instructor'}
                        onChange={() => setActiveDiv('instructor')} /> INSTRUCTOR
                </div> */}
                <div id="clientDiv " className={activeDiv === 'client' ? 'block' : 'hidden'}>
                    <form action="" className="infoform ">
                        <input type="email" placeholder="EMAIL ADDRESS" className="clientinfoinput" />
                        <input type="text" placeholder="NAME" className="clientinfoinput" />
                        <input type="password" placeholder="PASSWORD" className="clientinfoinput" />
                        <input type="password" placeholder="RE-ENTER PASSWORD" className="clientinfoinput" />
                        <input type="text" placeholder="CURRENT WEIGHT" className="clientinfoinput" />
                        <input type="text" placeholder="CUREENT HEIGHT" className="clientinfoinput" />
                        <input type="date" placeholder="DATE OF BIRTH" className="clientinfoinput" />

                        <input type="submit" value="CREATE ACCOUNT" className="creataccount" />
                    </form>
                </div>

                <div id="instructorDiv" className={activeDiv === 'instructor' ? 'block' : 'hidden'}>
                    <form action="" className="infoform">
                        <input type="email" placeholder="EMAIL ADDRESS" className="clientinfoinput" />
                        <input type="text" placeholder="NAME" className="clientinfoinput" />
                        <input type="password" placeholder="PASSWORD" className="clientinfoinput" />
                        <input type="password" placeholder="RE-ENTER PASSWORD" className="clientinfoinput" />
                        <input type="text" placeholder="ROLE (EG. FITNESS COACH, NUTRITIONIST)" className="clientinfoinput" />
                        <input type="date" placeholder="DATE OF BIRTH" className="clientinfoinput" />
                        <input type="text" placeholder="SPECIALIZATION" className="clientinfoinput" />
                        <input type="submit" value="CREATE ACCOUNT" className="creataccount" />
                    </form>
                </div>
            </div>
            {/* <div className="profileimgDiv">
                <img className="profileimg" />
                <label for="fileupload" className="customfileupload">IMAGE UPLOAD</label>
                <input type="file" name="image" id="fileupload" />
            </div> */}
        </div>
    </div>
}
export default SignUp;