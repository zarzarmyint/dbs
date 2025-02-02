import React from "react";
import './Feedback.css';

const FeedBack = () => {

    const items = [
        { id: 1, name: "JulieS", membertype: "Diet Plan Member", comment: "Healthy and it is really effective for me.", createdate: "24 Jan 2025" },
        { id: 2, name: "Vanessa", membertype: "Diet Plan Member", comment: "Portion size is so small", createdate: "24 Jan 2025" },
        { id: 3, name: "Kelly", membertype: "Diet Plan Member", comment: "This menu is repeated for 3 days.", createdate: "24 Jan 2025" },
        { id: 4, name: "Alic May", membertype: "Diet Plan Member", comment: "Healthy and it is really effective for me.", createdate: "24 Jan 2025" }
    ];

    return <div className="feedbackcontainer">
        <div className="allfeedbackDiv">

            {items.map(item => {

                return <div className="feedbackbox">
                    <p className="p1-infb">{item.name}</p>
                    <p className="p2-infb">{item.membertype}</p>
                    <p className="p3-infb">{item.comment}</p>
                    <p className="p2-infb">{item.createdate}</p>
                </div>
            })}
            {/* <div className="feedbackbox">
                <p className="p1-infb">JulieS</p>
                <p className="p2-infb">Deit Plan Member</p>
                <p className="p3-infb">Healthy and it is really effective for me.</p>
                <p className="p2-infb">24 Jan 2025</p>
            </div> */}
        </div>
        <div className="userfeedbackDiv">
            <textarea placeholder="your comment..." name="feedbackcoment" id="fdcomment" rows={5} ></textarea>
            <button>Submit</button>
        </div>
    </div>
}
export default FeedBack;