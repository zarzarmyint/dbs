import React from "react";
import './Instructorprofile.css';
import InProfileImage from '../../assets/images/InProfile.jpg';
import { FaListCheck, FaCamera } from 'react-icons/fa6';

const InstructorProfile = () => {

    return <div className='in_profilecontainer'>
        <div className="dietplanDiv">
            <h2>DIET PLAN UPLOAD (ONLY INSTUCOTR)</h2>
            <button>
                <a href="/dietplanupload"> DIET PLAN UPLOAD</a>
            </button>

        </div>
        <div className="workoutplanDiv"></div>
    </div>

}
export default InstructorProfile;

