import React, { useState } from "react";
import SignupModal from "./SignupModal.js";
import LoginModal from "./LoginModal.js";
import styles from "./Navbar.module.css";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'

const style = {
  fontFamily: "Montserrat",
  textAlign: "center",
};

const Navbar = () => {
  const [showmodel, setShowModel] = useState(false);

  const handleModel = (value) => {
    setShowModel(value);
  };

  const close = () => {
    console.log("Closed!");
    setShowModel(false);
  };

  const open = () => {
    setShowModel(true);
  };

  return (
    <div style={style}>
      <LoginModal show={showmodel} onClose={() => setShowModel(false)} />
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <a href="/" name="" className="">
                <img src="./law2.png" className={styles.logo} alt="" />
              </a>
            </li>

            <li className={styles.navItem}>
              <Link to="/wto_and_others" className={styles.navA}>
                WTO AND OTHERS
              </Link>
            </li>

            <li className={styles.navItem}>
              <a name="navik" onClick={open} className={styles.navB}>
                NAVIK
              </a>
            </li>
          </ul>

          <div>
            <button className={styles.navBtn} onClick={open}>
              <i className="fa fa-user"></i>
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
