import React from 'react'

// Assets | ICONS :
import { BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../../../../Assets/logo.png";

// CSS :
import "./NavBar.scss";





const NavBar = () => {
    return (
        <>
            <div className="navBarContainer">
                <div className="promotionBox">
                    <div className="promotion">
                        <p>TURNAROUND TIME 24-48 HOURS!</p>
                        <button>Affordable Estimate (30% off) </button>
                    </div>
                    <div className="contact">
                        <div className="details">
                            <p> <BsWhatsapp /> +1 917 300 1079 </p>
                            <p> <AiOutlineMail /> Dave@procoreestimators.com </p>
                        </div>
                        <div className="social">
                            <BsFacebook /> <BsLinkedin />
                        </div>
                    </div>
                </div>
                <div className="navBar">

                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#">Service</a>
                        <a href="#">About us</a>
                        <a href="#">Payment</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Samples</a>
                        <a href="#">Estimation fee</a>
                        <a href="#">Contact us</a>
                    </div>
                    <button>Get Estimate</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;
