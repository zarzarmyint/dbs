import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../components/layout/navbar/Navbar';

import Footer from '../components/layout/footer/Footer';
import Home from '../views/home/Home';
import SignUp from '../views/singup/Signup';
import SignIn from '../views/singin/Signin';
import AboutUs from '../views/aboutus/Aboutus';
import Profile from '../views/profile/Profile';
import Plan from '../views/Plan/Plan';



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
                        <Route path="/plan" element={<Plan></Plan>}></Route>
                    </Routes>
                </main>

                <Footer></Footer>
            </div>
        </BrowserRouter>
    );

}
export default AppRoutes;