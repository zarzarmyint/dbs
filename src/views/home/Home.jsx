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
        <h1>WELCOME TO BURNTASTIC</h1>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <div className="memberbox">
            <p>Total Member</p>
            <h1>264</h1>

        </div>
        <hr /> */}
    </div>
}
export default Home;