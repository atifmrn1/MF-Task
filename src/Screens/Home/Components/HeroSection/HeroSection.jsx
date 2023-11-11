import React from 'react'

// Assets | ICONS :
import HeroImg from "../../../../Assets/hero.png";

// CSS :
import "./HeroSection.scss";





const HeroSection = () => {
    return (
        <>
            <div className="heroScetionContainer">
                <div className="heroBox">
                    <h1 className="title">Mechanical/Plumbing</h1>
                    <div className="imgBox">
                        <img src={HeroImg} alt="ERROR" />
                    </div>
                </div>
                <div className="para smallContainer">
                    At <span> Procore Estimators</span>, our area of expertise lies in delivering precise and dependable mechanical and plumbing estimates. Our seasoned team of estimators grasps the complexities of mechanical and plumbing systems, offering all-encompassing and thorough estimates for your projects. Catering to both residential and commercial constructions, we factor in equipment, materials, labor, and project-specific requirements. Our unwavering commitment to providing vital information enables our clients to make well-informed decisions to ensure the success of their projects. Our mechanical and plumbing estimates form the bedrock of a triumphant construction project.
                </div>
            </div>
        </>
    )
}

export default HeroSection
