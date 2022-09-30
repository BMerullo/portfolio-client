import React from 'react';
import resumeImg from '../images/resume-img.png';
import Header from './Header';


const Resume = (props) => {

    const { title } = props

    return (
        <div className="content-body">
            <Header title={title} />
            <div className="resume-background banner">
                <div className="top-banner-title">
                    <h1 className="page-title">Resume</h1>
                    <p>Bob's porfessional resume</p>
                </div>
            </div>
            <div className="resume-div">
                <img className="resume-img" src={resumeImg} alt="Robert Merullo's resume" />
            </div>
        </div>
    )
}

export default Resume;
