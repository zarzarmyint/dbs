import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';
import Home from '../views/home/Home';
import SignUp from '../views/singup/Signup';
import SignIn from '../views/singin/Signin';
import AboutUs from '../views/aboutus/Aboutus';
import Profile from '../views/profile/Profile';
import InstructorProfile from '../views/instructorprofile/Instructorprofile';
import MemberShip from '../views/membership/Membership';
import FeedBack from '../views/feedback/Feedback';
import DietPlanUpload from '../views/instructorprofile/dietplanupload/Dietplanupload';
import DietPlanList from '../views/instructorprofile/dietplanlist/DietPlanList';
import BuyDietPlan from '../views/buydietplan/Buydietplan';
import MyPlan from '../views/myplan/Myplan';


const AppRoutes = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar></Navbar>
                <main>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/signup" element={<SignUp></SignUp>}></Route>
                        <Route path="/signin" element={<SignIn></SignIn>}></Route>
                        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
                        <Route path="/profile" element={<Profile></Profile>}></Route>
                        <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
                        <Route path="/instructorprofile" element={<InstructorProfile></InstructorProfile>}></Route>
                        <Route path="/feedback" element={<FeedBack></FeedBack>}></Route>
                        <Route path="/dietplanupload" element={<DietPlanUpload></DietPlanUpload>}></Route>
                        <Route path="/dietplanlist" element={<DietPlanList></DietPlanList>}></Route>
                        <Route path="/buydietplan" element={<BuyDietPlan></BuyDietPlan>}></Route>
                        <Route path="/myplan" element={<MyPlan></MyPlan>}></Route>
                    </Routes>
                </main>

                <Footer></Footer>
            </div>
        </BrowserRouter>
    );

}
export default AppRoutes;