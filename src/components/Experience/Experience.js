import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Experience = () => (
    <OwlCarousel
        margin={10}
        items={window.innerWidth<768?1:2}
        //nav
        style={{
            cursor: "pointer"
            //fontSize:"40px"
        }}
    >
        <div class="item">
            <div style={{
                backgroundColor: "white",
                height: `${(window.innerHeight - 300)}px`,
                width: `${(window.innerWidth<768?(window.innerWidth - 100):(window.innerWidth - 180)/2)}px`,
                display: "inline-block",
                margin: "10px",
                boxShadow: "rgba(50, 50, 50, 5) 8px 8px 32px -14px",
                padding: "20px",
                borderRadius: "14px"
            }}>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>Sept 2018 - Present</div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>Tata Consultancy Services</div>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>Software Developer</div>
                <ul style={{ fontSize: "14px", margin: "0" }}>
                    <li>hgf du tdjut</li>
                    <li>fuyf u yfytd</li>
                    <li>hf dru dfu tdf</li>
                </ul>
            </div>
        </div>
        <div class="item">
            <div style={{
                backgroundColor: "white",
                height: `${(window.innerHeight - 300)}px`,
                width: `${(window.innerWidth<768?(window.innerWidth - 100):(window.innerWidth - 180)/2)}px`,
                display: "inline-block",
                margin: "10px",
                boxShadow: "rgba(50, 50, 50, 5) 8px 8px 32px -14px",
                padding: "20px",
                borderRadius: "14px"
            }}>
                <div style={{ fontSize: "14px", fontWeight: "bold", width: "70vh" }}>Mar 2017 - Feb 2018</div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>Freelancing</div>
                <ul style={{ fontSize: "14px", margin: "0" }}>
                    <li>hgf du tdjut</li>
                    <li>fuyf u yfytd</li>
                    <li>hf dru dfu tdf</li>
                </ul>
            </div>
        </div>
    </OwlCarousel>
);

export default Experience;