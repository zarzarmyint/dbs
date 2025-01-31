import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../../assets/images/LOGO.png';
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();

    const signupClick = async () => {
        navigate('/signup');
    }
    const signinClick = async () => {
        navigate('/signin');
    }


    return <nav className="navcontainer">
        <div className="nav">
            <div className="logoDiv">
                <img src={logo} alt='logoimage'></img>
            </div>
            <div className="menuDiv" >
                <ul className="menu">
                    <li><a href="/" className={useLocation().pathname === "/" ? "active" : "noactive"} >HOME</a></li>
                    <li><a href="#"  >MEMBERSHIP</a></li>
                    <li><a href="/plan" className={useLocation().pathname === "/plan" ? "active" : "noactive"}>PLAN</a></li>
                    <li><a href="#"  >FEEDBACK</a></li>
                    <li><a href="/aboutus" className={useLocation().pathname === "/aboutus" ? "active" : "noactive"}>ABOUTUS</a></li>
                </ul>
            </div>

            <div className="profileDiv">
                <div className="singin_upDiv">
                    <button onClick={signinClick}>SING IN</button>
                </div>
                <a href="/profile"> <FaUserCircle size={30} style={{ cursor: "pointer", color: "#ff6f3a" }}></FaUserCircle></a>
            </div>
        </div>

    </nav>

}
export default Navbar;