import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SignupModal from "./SignupModal.js";
import styles from "./Login.module.css";

export default function LoginModal({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setbuttonText] = useState("Submit");
  const [forgotPass, setForgotPass] = useState(false);

  const handleForgot = () => setForgotPass((v) => !v);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <Modal show={true} onHide={onClose}>
        <button type="button" className={styles.close} onClick={onClose}>
          ×
        </button>
        <div className={styles.loginBody}>
          <h3 className={styles.loginHeader}>Login</h3>
          <div className="row">
            <Modal.Body className={styles.loginBox}>
              {!forgotPass ? (
                <div>
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="email"
                      className={styles.formField}
                      placeholder="Enter Email "
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      type="password"
                      id="password"
                      className={styles.formField}
                      placeholder="Enter Password "
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className={styles.loginButtons}>
                      <button className={styles.loginBtn} onClick={onClose}>
                        Cancle
                      </button>

                      <button className={styles.loginBtn2} onClick={onClose}>
                        Login
                      </button>
                    </div>
                  </form>
                  <p onClick={handleForgot}>
                    <a className={styles.logA} href="#">
                      Forgot Password?
                    </a>
                  </p>
                  <SignupModal />
                </div>
              ) : (
                <div>
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="email"
                      className={styles.formField}
                      placeholder="Enter Email "
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />
                    <button className={styles.loginBtn} onClick={onClose}>
                      Submit
                    </button>
                  </form>
                  <p onClick={handleForgot}>
                    <a className={styles.logA} href="#">
                      <br />
                      {`< back to login`}
                    </a>
                  </p>
                </div>
              )}
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
}
