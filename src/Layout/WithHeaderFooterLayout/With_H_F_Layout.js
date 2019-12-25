import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const HFLayout = props => {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default HFLayout;