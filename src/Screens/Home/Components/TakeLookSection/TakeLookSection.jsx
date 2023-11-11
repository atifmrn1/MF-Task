import React from 'react'

// Assets | ICONS :
import IMG1 from "../../../../Assets/takeLook1.png";
import IMG2 from "../../../../Assets/takeLook2.png";
import IMG3 from "../../../../Assets/takeLook3.png";
import IMG4 from "../../../../Assets/takeLook4.png";

// CSS :
import "./TakeLookSection.scss";





const TakeLookSection = () => {
    return (
        <>
            <div className="takeLookSectionContainer smallContainer">
                <h1 className="heading">Take a look at our Trades</h1>
                <div className="cardBox">
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG1} alt="ERROR" />
                        </div>
                        <button>General Requirement</button>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG2} alt="ERROR" />
                        </div>
                        <button>General Requirement</button>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG3} alt="ERROR" />
                        </div>
                        <button>General Requirement</button>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG4} alt="ERROR" />
                        </div>
                        <button>General Requirement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeLookSection
