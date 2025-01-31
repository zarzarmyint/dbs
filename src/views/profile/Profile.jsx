import './Profile.css'
import ProfileImage from '../../assets/images/profileimage.jpg';
import { FaListCheck, FaCamera } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

const Profile = () => {



    return <div className='profilecontainer'>
        <div className="profileimageDiv">
            <img src={ProfileImage} alt="profileimage" />
            <div className='photoedit'>
                <FaCamera for="fileuploads"></FaCamera>
                <label for="fileupload" className="photofileupload">Edit photo</label>
                <input type="file" name="image" id="fileupload" />
            </div>
        </div>
        <div className="profileinfoDiv">
            <h2>Alice May</h2>
            <br />
            <div className='infoline'>
                <p>Eamil:</p>
                <p className='infobold'>alicemay2025@gmail.com</p>
            </div>
            <div className='infoline'>
                <p>Height:</p>
                <p className='infobold'>172 cm</p>
            </div>
            <div className='infoline'>
                <p>Weight:</p>
                <p className='infobold'>50 kg</p>
            </div>
            <div className='infoline'>
                <p >Date of birth:</p>
                <p className='infobold'>January 1, 2000</p>
            </div>
            <div className='infoline'>
                <p>Membership:</p>
                <p className='infobold'>Membertype</p>
            </div>
            <div className='infoline'>
                <p>Create date:</p>
                <p className='infobold'>January 1, 2025</p>
            </div>
            <div className='infoline myplantbox'>
                {/* <button className='myplantbtn'>MY PLAN</button> */}
                <FaListCheck size={20} style={{ color: "#ff6f3a", paddingRight: "10px" }}></FaListCheck>
                <a href="/" >MY PLAN</a>
            </div>
            <div className='infoline'>
                <button className='logoutbtn'>LOGOUT</button>
            </div>
            {/* <input type="email" placeholder="EMAIL ADDRESS" className="clientinfoinput" />
            <input type="text" placeholder="CUREENT HEIGHT" className="clientinfoinput" />
            <input type="date" placeholder="DATE OF BIRTH" className="clientinfoinput" />
            <input type="text" placeholder="MEMBER" className="clientinfoinput" /> */}

        </div>
    </div>
}
export default Profile;