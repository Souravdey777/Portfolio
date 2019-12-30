import React from 'react';
import './textTypewriterEffect';
import Souravdey from './Name/Souravdey';

const About = () => (
    <div>
        <h3>
        <div style={{ fontSize: window.innerHeight > 700 ? "1.8em" : "1.4em"}}>
            Hi <span style={{ color: "white", fontWeight: "bold" }}> Sourav </span> here,
            <br />
            <br />
            <Souravdey />
            <br />
            <br />
                Based on Bangalore. Currently working as
            <span style={{ color: "white", fontWeight: "bold" }}> Software Developer </span>
                for Tata Consultancy Services.
            </div>
        </h3>
    </div>
);

export default About;