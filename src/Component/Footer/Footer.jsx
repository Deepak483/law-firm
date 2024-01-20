import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Insta } from "../../assests/svgs/instagram.svg";
import { ReactComponent as Facebook } from "../../assests/svgs/facebook.svg";
import { ReactComponent as Twitter } from "../../assests/svgs/twitter.svg";
import pinterestImage from "../../assests/images/pinterestImage.png";
import logo from "../../assests/images/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerInfo}>
        <div className={styles.leftLogo}>
          <img src={logo} alt="logo" />
          <h3>IGSTUDIO</h3>
        </div>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
        <div className={styles.social}>
          <Insta />
          <Facebook />
          <Twitter />
          <img src={pinterestImage} alt="" />
        </div>
      </div>
      <div className={styles.trademark}>
        <p>&copy;2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
