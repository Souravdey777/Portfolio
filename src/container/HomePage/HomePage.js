import React from 'react';
import HFLayout from '../../Layout/WithHeaderFooterLayout/With_H_F_Layout';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import { SectionsContainer, Section } from 'react-fullpage';
import Training from '../../components/Training/Training';
import Skills from '../../components/Skills/Skills';
import Classnames from './HomePage.module.css';
import CertificationsAchievements from '../../components/Certifications_Achievements/Certifications_Achievements';

class HomePage extends React.Component {
    render() {
        let options = {
            activeClass: 'active',
            anchors: ['About Me', 'Experience', 'Education', 'Trainings', 'Projects',
                'Skills', 'Certifications & Achievements', 'Postions of Responsebility'],
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
                    <Section color="black">
                        <div className={Classnames.pageRootBlack}>
                            <hr />
                            <About />
                            <hr />
                        </div>
                    </Section>
                    <Section color="whitesmoke">
                        <div className={Classnames.pageRootWhite}>
                            <h1 className={Classnames.leftAlignedBold}>{options.anchors[1]}</h1>
                            <hr />
                            <Experience />
                        </div>
                    </Section>
                    <Section color="black">
                        <div className={Classnames.pageRootBlack}>
                            <h1 className={Classnames.rightAlignedBold}>{options.anchors[2]}</h1>
                            <hr />
                            <Education />
                        </div>
                    </Section>
                    <Section color="whitesmoke">
                        <div className={Classnames.pageRootWhite}>
                            <div className={Classnames.leftAlignedBold}>{options.anchors[3]}</div>
                            <hr />
                            <Training />
                        </div>
                    </Section>
                    <Section color="black">
                        <div className={Classnames.pageRootBlack}>
                            <div className={Classnames.rightAlignedBold}>{options.anchors[4]}</div>
                            <hr />
                            Projects
                        </div>
                    </Section>
                    <Section color="whitesmoke">
                        <div className={Classnames.pageRootWhite}>
                            <div className={Classnames.leftAlignedBold}>{options.anchors[5]}</div>
                            <hr />
                            <Skills />
                        </div>
                    </Section>
                    <Section color="black">
                        <div className={Classnames.pageRootBlack}>
                            <div className={Classnames.rightAlignedBold}>{options.anchors[6]}</div>
                            <hr />
                            <CertificationsAchievements />
                        </div>
                    </Section>
                    <Section color="whitesmoke">
                        <div className={Classnames.pageRootWhite}>
                            <div className={Classnames.leftAlignedBold}>{options.anchors[7]}</div>
                            <hr />
                            Postions of Responsebility
                        </div>
                    </Section>
                </SectionsContainer>

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