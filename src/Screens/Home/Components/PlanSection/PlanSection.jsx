import React from 'react'

// Assets | ICONS :
import BACKIMG from "../../../../Assets/planBack.png";
import DriveIcon from "../../../../Assets/drive.svg";
import UpToIcon from "../../../../Assets/upto.svg";

// CSS :
import "./PlanSection.scss";





const PlanSection = () => {
    return (
        <>
            <div className="planSectionContainer">
                <div className="imgBox">
                    <img src={BACKIMG} alt="ERROR" />
                </div>
                <div className="leftSide">
                    <button> Upload your Plans  </button>
                    <div className="social">
                        <img src={UpToIcon} alt="" />
                        <img src={DriveIcon} alt="" />
                        {/* <UpToIcon /> */}
                        {/* <DriveIcon /> */}
                    </div>
                </div>
                <div className="rightSide">
                    For a quick quote based on your project scope, call us at +1 917 300 1079 or email us at Dave@procoreestimators.com
                </div>
            </div>
        </>
    )
}

export default PlanSection
