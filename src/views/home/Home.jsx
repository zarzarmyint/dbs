import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    let navigate = useNavigate();

    const signupClick = async () => {
        navigate('/signup');
    }
    const signinClick = async () => {
        navigate('/signin');
    }


    return <div className="homecontainer">
        <h1>WELOCME TO BURNTASTIC</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <div className="singin_upDiv">
            <button onClick={signinClick}>SING IN</button>
            <button onClick={signupClick}>SING UP</button>
        </div>
    </div>
}
export default Home;