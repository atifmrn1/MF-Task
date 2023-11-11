import React from 'react';

// CSS :
import "./AboutSection.scss";





const AboutSection = () => {
    return (
        <>
            <div className="aboutSectionContainer smallContainer">
                <h1 className="heading">Are You Ready To Get Started With Us!</h1>
                <div className="box">
                    <div className="point">
                        <h2 className="title">1- Upload you Plans</h2>
                        <div className="details">    <span>Click here</span> to upload your plans. we accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.</div>
                    </div>
                    <div className="point">
                        <h2 className="title">2- Get a Quote</h2>
                        <div className="details">    Quotes will be based on invoice, delivery date, and turnaround time.   </div>
                    </div>
                    <div className="point">
                        <h2 className="title">3- Receive Estimate</h2>
                        <div className="details">    Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut reports either in MasterFormat or your customized format.   </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
