import React from 'react'

// Assets | ICONS :
import IMG1 from "../../../../Assets/mechanical1.png";
import IMG2 from "../../../../Assets/mechanical2.png";
import IMG3 from "../../../../Assets/mechanical3.png";
import IMG4 from "../../../../Assets/plumbing1.png";
import IMG5 from "../../../../Assets/plumbing2.png";
import IMG6 from "../../../../Assets/plumbing3.png";

// CSS :
import "./MechanicalSection.scss";





const MechanicalSection = () => {
    return (
        <>
            <div className="mechanicalSectionContainer smallContainer">
                <h1 className="heading"> Mechanical Estimation Data </h1>
                <div className="cardBox">
                    <div className="card">
                        <div className="title">HVAC</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>
                            <div className="imgBox">
                                <img src={IMG1} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">Mechanical Equipment Installation</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>

                            <div className="imgBox">
                                <img src={IMG2} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">Energy Efficiency Upgrades</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>

                            <div className="imgBox">
                                <img src={IMG3} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plumbingSectionContainer smallContainer">
                <h1 className="heading"> Plumbing Estimation Data </h1>
                <div className="cardBox">
                    <div className="card">
                        <div className="title">Piping Systems</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>

                            <div className="imgBox">
                                <img src={IMG4} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">Fixtures and Sanitaryware</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>

                            <div className="imgBox">
                                <img src={IMG5} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">Drainage and Water Supply</div>
                        <div className="details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa ipsam ex sed dolore placeat, obcaecati repellendus aspernatur, minima minus quibusdam optio! Eligendi dolorum cupiditate ad a atque, nam incidunt nostrum earum. </p>

                            <div className="imgBox">
                                <img src={IMG6} alt="ERROR" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MechanicalSection
