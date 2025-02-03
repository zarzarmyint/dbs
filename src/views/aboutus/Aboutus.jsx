import React from "react";
import './Aboutus.css';
import InProfile1 from '../../assets/images/inprofile1.jpg';
import InProfile2 from '../../assets/images/inprofile2.jpg';
import InProfile3 from '../../assets/images/inprofile3.jpg';

const AboutUs = () => {
    return <div className="aboutuscontainer">
        <div className="aboutus">
            <h2>ABOUT US</h2>
            <div className="profilegroup">
                <div>
                    <img src={InProfile1} alt="profileimage" />
                    <h3>Lilly May</h3>
                    <p>IT Operation</p>
                </div>
                <div>
                    <img src={InProfile2} alt="profileimage" />
                    <h3>Julia Alisa</h3>
                    <p>Advisor</p>
                </div>
                <div>
                    <img src={InProfile3} alt="profileimage" />
                    <h3>John Smith</h3>
                    <p>Instructor</p>
                </div>
            </div>

            <h3>Burntastic</h3>
            <p>
                Founded in 2020, Burntastic was created with a simple yet powerful mission: to help people take control of their health and transform their lives through personalized workout and diet plans. We understand that fitness is more than just hitting the gym or following a restrictive diet. It’s about building sustainable habits, staying motivated, and feeling your absolute best. That’s why we provide expert-designed programs tailored to different goals, fitness levels, and lifestyles.</p>
            <br />
            <h3>Our Story</h3>
            <p>
                Burntastic was born out of a passion for fitness, nutrition, and helping people unlock their full potential.We saw a gap in the fitness industry, many people struggled to find a program that was both effective and sustainable.Some plans were too generic, others too restrictive, and many lacked the motivation and guidance needed for long - term success.We set out to change that by creating a platform that offers customized, science - backed, and results - driven fitness solutions.
                Since our founding, we have helped thousands of individuals burn fat, build muscle, improve endurance, and enhance overall wellness.Our approach is built on the idea that everyone’s fitness journey is unique, and success comes from having the right plan, tools, and support.</p>

            <br />
            <h3>Our Mission & Vision</h3>
            <p>
                At Burntastic, our goal is simple to inspire, educate, and empower individuals to take charge of their health and fitness.We believe that everyone deserves to feel strong, confident, and full of energy, and we’re here to help you get there.
                Join the Burntastic movement today and take the first step toward a stronger, healthier, and happier YOU!
                Be Bold.Be Strong.Be Burntastic.</p>
            <br />

        </div>

    </div>
}
export default AboutUs;
