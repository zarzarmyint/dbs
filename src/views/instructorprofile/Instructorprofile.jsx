import React from "react";
import './Instructorprofile.css';
import InProfileImage from '../../assets/images/InProfile.jpg';
import { FaListCheck, FaCamera } from 'react-icons/fa6';
import InProfile3 from '../../assets/images/inprofile3.jpg';

const InstructorProfile = () => {

    return <div className='in_profilecontainer'>
        <div className="dietplanDiv">
            <h2>DIET PLAN UPLOAD (ONLY INSTRUCTOR)</h2>

            <button>
                <a href="/dietplanupload"> DIET PLAN UPLOAD</a>
            </button>
            <button>
                <a href="/workoutplanupload"> WORKOUT PLAN UPLOAD</a>
            </button>
            <button>
                <a href="/memberlevel"> MEMBER LEVEL</a>
            </button>
            <div className="inprofile">
                <img src={InProfile3} alt="profileimage" />
                <h3>BURNTASTIC</h3>
                <p>Instructor</p>
            </div>
        </div>
        <div className="workoutplanDiv"></div>
    </div>

}
export default InstructorProfile;

