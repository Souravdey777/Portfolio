import React from 'react';
import HFLayout from '../../Layout/With_H_F_Layout';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
// import Education from '../../components/Education/Education';
// import Training from '../../components/Training/Training';
// import Skills from '../../components/Skills/Skills';
import Classnames from './HomePage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

class HomePage extends React.Component {
    render() {
        return (
            <HFLayout>
                <PageTitle/>
                <div>
                <About />
                
                {/* <div className={Classnames.pageRootWhite}>
                    <Experience />
                </div> */}
                </div>
                {/* <div style={{ backgroundColor: "black" }}>
                    <div className={Classnames.pageRootBlack}>
                        <h1 className={Classnames.rightAlignedBold}>{anchors[2]}</h1>
                        <hr />
                        <Education />
                    </div>
                </div>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className={Classnames.pageRootWhite}>
                        <div className={Classnames.leftAlignedBold}>{anchors[3]}</div>
                        <hr />
                        <Training />
                    </div>
                </div>
                <div style={{ backgroundColor: "black" }}>
                    <div className={Classnames.pageRootBlack}>
                        <div className={Classnames.rightAlignedBold}>{anchors[4]}</div>
                        <hr />
                            Projects
                        </div>
                </div>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className={Classnames.pageRootWhite}>
                        <div className={Classnames.leftAlignedBold}>{anchors[5]}</div>
                        <hr />
                        <Skills />
                    </div>
                </div>
                <div style={{ backgroundColor: "black" }}>
                    <div className={Classnames.pageRootBlack}>
                        <div className={Classnames.rightAlignedBold}>{anchors[6]}</div>
                        <hr />
                        {/* <CertificationsAchievements /> */}
                {/* </div>
                </div>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className={Classnames.pageRootWhite}>
                        <div className={Classnames.leftAlignedBold}>{anchors[7]}</div>
                        <hr />
                            Postions of Responsebility
                        </div>
                    </div> */}

                {/* <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
                    <div style={{ color: "white", padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Postions of Responsebility</u>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}>
                    <div style={{ padding: "20px", paddingTop: "140px", textAlign: "left" }}>
                        <u>Contact me</u>
                    </div>
                </div> */}
            </HFLayout >
        );
    }
}

export default HomePage;