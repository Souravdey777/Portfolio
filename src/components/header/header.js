import React from "react";
import styles from "./header.module.css";
import Profileimage from "../../assets/images/profileImage.jpg";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_body}>
                <div className={styles.logo_text}>
                    <b>SOURAV DEY</b>
                    <div>Developer & Designer</div>
                </div>
                <img
                    src={Profileimage}
                    className={styles.Profileimage}
                    alt="ProfileImage"
                />
            </div>
        </header>
    );
}

export default Header;
