import React from 'react';
import './textTypewriterEffect';
import Souravdey from './Name/Souravdey';

const About = () => (
    <div>
        <h3>
            Hi <span style={{ color: "white", fontWeight: "bold" }}> Sourav </span> here,
            <br />
            <br />
            <Souravdey />
            <br />
            <br />
            Based on Bangalore. Currently working as
            <span style={{ color: "white", fontWeight: "bold" }}> Software Developer </span>
            for Tata Consultancy Services.
        </h3>
    </div>
);

export default About;