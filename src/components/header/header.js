import React from "react";
import Stylist from "./header.module.css";
import Profileimage from "../../assets/images/profileImage.jpg";

function Header() {
    return (
        <header className={Stylist.header}>
            <div className={Stylist.header_body}>
                <div className={Stylist.logo_text}>
                    <b>SOURAV DEY</b>
                    <div>Developer & Designer</div>
                </div>
                <img
                    src={Profileimage}
                    className={Stylist.Profileimage}
                    alt="ProfileImage"
                />
            </div>
        </header>
    );
}

export default Header;
