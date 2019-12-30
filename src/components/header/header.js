import React from 'react';
import Stylist from './header.module.css';
import Profileimage from '../../assets/images/profileImage.jpg';
function Header() {
    return (
        <header className={Stylist.header}>
            <div className={Stylist.header_body}>
                <div className={Stylist.logo_text}>
                <span style={{fontWeight:"bolder"}}>SOURAV DEY</span>
                <p>Developer & Designer</p>
                </div>
                <img src={Profileimage} className={Stylist.Profileimage} alt="ProfileImage" />
            </div>
        </header>
    );
}

export default Header;