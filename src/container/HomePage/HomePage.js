import React from 'react';
import HFLayout from '../../Layout/WithHeaderFooterLayout/With_H_F_Layout';
import About from './About/About';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import { SectionsContainer, Section } from 'react-fullpage';
import Training from './Training/Training';
import Skills from './Skills/Skills';

class HomePage extends React.Component {
    render() {
        let options = {
            activeClass: 'active',
            anchors: ['About', 'Experience', 'Education','Trainings','Skills'],
            arrowNavigation: true,
            className: 'SectionContainer',
            navigation: false,
            scrollBar: false,
            sectionClassName: 'Section',
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            verticalAlign: false,
            recordHistory: false,
        };
        return (
            <HFLayout>
                <SectionsContainer {...options}>
                    <Section><About /></Section>
                    <Section><Experience /></Section>
                    <Section><Education /></Section>
                    <Section><Training/></Section>
                    <Section><Skills/></Section>
                </SectionsContainer>

                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                    <div style={{ padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Projects</u>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                    <div style={{ color: "white", padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Skills</u>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                    <div style={{ padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Certifications & Achievements</u>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                    <div style={{ color: "white", padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Postions of Responsebility</u>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                    <div style={{ padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Contact me</u>
                    </div>
                </div>
            </HFLayout>
        );
    }
}

export default HomePage;