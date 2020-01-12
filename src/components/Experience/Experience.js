import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Experience = () => (
    <OwlCarousel
        margin={10}
        items={1}
        nav
    >
        <div class="item">
            <div style={{
                backgroundColor: "white",
                width: `${(window.innerWidth - 120)}px`,
                display: "inline-block",
                margin: "10px",
                boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
                padding: "30px",
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
                width: `${(window.innerWidth - 120)}px`,
                display: "inline-block",
                margin: "10px",
                boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
                padding: "30px",
                borderRadius: "14px"
            }}>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>Sept 2018 - Present</div>
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