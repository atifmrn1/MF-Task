import React from 'react'

// Assets | ICONS :
import Logo from "../../../../Assets/logo.png";
import { IoMdCall, IoMdMail } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6"


// CSS :
import "./Footer.scss";





const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="box">
                    <div className="logoBox">
                        <div className="imgBox">
                            <img src={Logo} alt="ERROR" />
                        </div>
                        <div className="para"> <span> PROCORE Estimators </span> are an industry leader in providing accurate and reliable construction cost estimation services. We specialize in Quantity and Material Takeoff, Scheduling, and Planning for your project management needs. Our experts use advanced softwares and we pay close attention to detail to ensure accurate estimates. We provide you with accurate information in a timely manner, enabling you to make informed decisions and execute projects efficiently. Rely on PROCORE Estimators for precise and prompt cost estimation in construction.</div>
                    </div>
                    <div className="navigation">
                        <div className="title">Navigation</div>
                        <div className="link">Service</div>
                        <div className="link">About us</div>
                        <div className="link">Payment</div>
                        <div className="link">Sample</div>
                    </div>
                    <div className="contact">
                        <div className="title">Contact</div>
                        <div className="link"> <div className="icon"><FaLocationDot /></div> 2505 Bedford Ave, Brooklyn, NY 11226, USA</div>
                        <div className="link"> <div className="icon"> <IoMdCall /> </div> +1 917 300 1079</div>
                        <div className="link"> <div className="icon"> <IoMdMail /> </div> Dave@procoreestimators.com</div>
                    </div>
                </div>
                <div className="copy"> Copyright © 2023 Procore Estimators Designed By Lorem </div>
            </div>
        </>
    )
}

export default Footer
