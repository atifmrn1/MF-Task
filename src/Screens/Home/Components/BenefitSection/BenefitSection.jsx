import React from 'react'

// Assets | ICONS :
import BenefitsIMG from "../../../../Assets/benefits.png";

// CSS :
import "./BenefitSection.scss";





const BenefitSection = () => {
    return (
        <>
            <div className="benefitSectionContainer smallContainer">
                <div className="box">
                    <div className="mechanicalBox">
                        <h1 className="heading">Benefits of Mechanical Estimating</h1>
                        <div className="points">
                            <ul>
                                <li> Getting access to the industry standards insights.</li>
                                <li> Understanding the internal project cost.</li>
                                <li> Getting the most reliable mechanical estimates.</li>
                                <li> Increasing the probability of high profit.</li>
                                <li> Boosting their win-bid ratio.</li>
                                <li> Streamlining their project activities with more confidence.</li>
                                <li> Identifying the errors and flaws in their mechanical project.</li>
                                <li> Mitigating the potential risk while saving their time and money.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="plumbingBox">
                        <h1 className="heading">Our Plumbing Estimating Services</h1>
                        <div className="points">
                            <ul>
                                <li> Cold Water Pipes</li>
                                <li> Hot Water Pipes</li>
                                <li> Vent Pipes</li>
                                <li> Gas Pipes</li>
                                <li> Sanitary Pipes</li>
                                <li> Underground Pipes</li>
                                <li> Pipe Fittings</li>
                            </ul>
                            <ul>
                                <li> Pipe Concealment</li>
                                <li> Insulations</li>
                                <li> Valves</li>
                                <li> Hangers</li>
                                <li> Struts</li>
                                <li> Supports</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="imgBox">
                    <img src={BenefitsIMG} alt="ERROR" />
                </div>
            </div>
        </>
    )
}

export default BenefitSection
