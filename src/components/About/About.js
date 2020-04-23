import React from 'react';
import './textTypewriterEffect';
import Souravdey from './Name/Souravdey';

const About = () => (
    <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>
            <div style={{ fontSize: window.innerWidth > 768 ? "1.8em" : "1rem" }}>
                Hi <span style={{ color: "white", fontWeight: "bold" }}> Sourav </span> here,
            <br />
                <br />
                <Souravdey />
                <br />
                Based on Bangalore. Currently working as
            <span style={{ color: "white", fontWeight: "bold" }}> Software Developer </span>
                for Tata Consultancy Services.
            </div>
        </h3>
    </div>
);

export default About;