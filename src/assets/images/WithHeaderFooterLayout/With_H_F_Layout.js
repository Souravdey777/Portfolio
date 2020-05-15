import React from 'react';
import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
import uc from './uc.gif'
const HFLayout = props => (
    <div>
        <Header />
        <div>
            {props.children}
        </div>
        <div>
            <img alt="under construction" style={{ width: "100%" }} src={uc}></img>
        </div>
        {/* <Footer /> */}
    </div>
);

export default HFLayout;