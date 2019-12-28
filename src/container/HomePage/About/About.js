import React from 'react';
import './textTypewriterEffect';
import Souravdey from './Name/Souravdey';

const About = () => (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        <div style={{ color: "rgba(245, 245, 245, 0.5)", padding: "20px", paddingTop: "140px", textAlign: "left" }}>
            <div style={{ fontSize: "16px", textAlign: "right" }}><b>About</b></div>
            <hr />
            <h4>
                Hi <span style={{ color: "white", fontStyle: "bold" }}>Sourav</span> here,
            </h4>
            <Souravdey/>
        </div>
    </div>
);

export default About;