import React from "react";
import { useNavigate } from "react-router-dom";
import './Plan.css';
import Dietplan from '../../assets/images/dietplan.jpg';
import Ketoplan from '../../assets/images/ketoplan.jpg';

const Plan = () => {

    return <div className="plancontainer">
        <h2 className="planheader">YOU CAN CHOOSE ANY PLAN TYPE</h2>
        <div className="plan">
            <div className="dietplanDiv">
                <img src={Dietplan} alt="Dietplan" className="planimagebox" />
                <p className="planpg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="ketoplanDiv">
                <img src={Ketoplan} alt="Dietplan" className="planimagebox" />
                <p className="planpg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
        </div>

    </div>

}
export default Plan;