import React from "react";
import { useNavigate } from "react-router-dom";
import './Membership.css';
import Dietplan from '../../assets/images/dietplan.jpg';
import Workoutplan from '../../assets/images/Workout.jpg';
import DietandWorkoutplan from '../../assets/images/dietandworkout.jpg';



const MemberShip = () => {

    let navigate = useNavigate();
    const dietplanClick = async () => {
        navigate('/buydietplan');
    }

    const workoutplanClcik = async () => {
        navigate('/buyworkoutplan');
    }

    return <div className="plancontainer">
        <h2 className="planheader">YOU CAN CHOOSE ANY PLAN TYPE</h2>
        <div className="plan">
            <div className="planbox">
                <img src={Dietplan} alt="Dietplan" className="planimagebox" onClick={dietplanClick} />

            </div>
            <div className="planbox">
                <img src={Workoutplan} alt="Dietplan" className="planimagebox" onClick={workoutplanClcik} />

            </div>
            <div className="planbox">
                <img src={DietandWorkoutplan} alt="Dietplan" className="planimagebox" />

            </div>
        </div>

    </div>

}
export default MemberShip;