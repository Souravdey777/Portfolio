import React from 'react';
import HFLayout from '../../Layout/WithHeaderFooterLayout/With_H_F_Layout';
import About from './About/About';
import Experience from './Experience/Experience';
import Education from './Education/Education';

class HomePage extends React.Component {
    render() {
        return (
            <HFLayout>
                
                <About/>
                <Experience/>
                <Education/>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                <div style={{ color:"white", padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Traiings</u>
                </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                <div style={{ padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Projects</u>
                </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                <div style={{ color:"white", padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Skills</u>
                </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                <div style={{ padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Certifications & Achievements</u>
                </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                <div style={{ color:"white", padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Postions of Responsebility</u>
                </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                <div style={{ padding:"20px", paddingTop:"140px",textAlign:"left" }}>
                    <u>Contact me</u>
                </div>
                </div>
            </HFLayout>
        );
    }
}

export default HomePage;