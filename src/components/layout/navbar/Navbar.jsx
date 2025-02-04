import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../../assets/images/LOGO.png';
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import SearchBox from "./Searchbox";

const Navbar = () => {

    let navigate = useNavigate();
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
                    {/* <li><a href="#"  >MEMBERSHIP</a></li> */}
                    <li><a href="/membership" className={useLocation().pathname === "/membership" ? "active" : "noactive"}>MEMBERSHIP</a></li>
                    <li><a href="feedback" className={useLocation().pathname === "/feedback" ? "active" : "noactive"}>FEEDBACK</a></li>
                    <li><a href="/instructorprofile" className={useLocation().pathname === "/instructorprofile" ? "active" : "noactive"}>INSTRUCTOR</a></li>
                    <li><a href="/progress" className={useLocation().pathname === "/progress" ? "active" : "noactive"}>PROGRESS</a></li>
                    <li><a href="/aboutus" className={useLocation().pathname === "/aboutus" ? "active" : "noactive"}>ABOUTUS</a></li>
                </ul>
            </div>

            <div className="profileDiv">
                <input type="text" placeholder="search..." className="searchboxinput" />
                {/* <SearchBox></SearchBox> */}
                <div className="singin_upDiv">
                    <button onClick={signinClick}>SIGN IN</button>
                </div>
                {/* <a href="/profile"> <FaUserCircle size={30} style={{ cursor: "pointer", color: "#ff6f3a" }}></FaUserCircle></a> */}
            </div>
        </div>

    </nav>

}
export default Navbar;