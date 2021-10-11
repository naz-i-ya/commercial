import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import styles from "./Signup.module.css";
 
export default function SignupModal(props) {

  const [forgotPass, setForgotPass] = useState(false);
const [show, setShow] = useState(false);

const[user, setUser] = useState({
  fname: "",
  lname: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  forgotPass:"false"
});

const handleChange = (e) => {
 const name = e.target.name;
 const value = e.target.value;
 console.log(name, value);

 setUser({...user, [name] : value});
}


const handleSubmit = (e) => {
  e.preventDefault();
  setUser({fname: "", lname: "", phone: "", email: "", 
  password: "", confirmPassword: "" });

  console.log("The form was submitted with the following data:");
  
}

 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleForgot = () => setForgotPass(v => !v);
  return (
    <>
      <p className="here">Don't have an account? <a 
      className={styles.signA} href="#" onClick={handleShow}>Signup here</a></p>
 
      <Modal show={show} onHide={handleClose}>
      <button type="button" className={styles.close} 
         onClick={handleClose} >×</button>
         <div className={styles.signupBody}>
          <h3 className={styles.signupHeader}>Signup</h3>
       
        
        <Modal.Body className={styles.signupBox}>
        
          <form  onSubmit={handleSubmit}>
          
             <label  htmlFor="fname">First Name:</label><br />
            <input
              type="text"
              id="fname"
              className={styles.formField}
              placeholder="Enter First Name "
              name="fname"
              value={user.fname}
              onChange={handleChange}
            />
          

          
          <label htmlFor="lname">Last Name:</label><br />
            <input
              type="text"
              id="lname"
              className={styles.formField}
              placeholder="Enter Last Name "
              name="lname"
              value={user.lname}
              onChange={handleChange}
            />
           

          
          <label  htmlFor="phone">Phone Number:</label><br />
            <input
              type="telephone"
              id="phone"
              className={styles.formField}
              placeholder="Enter Phone Number "
              name="number"
              value={user.phone}
              onChange={handleChange}
            />
           

          
            <label htmlFor="email">E-Mail Address</label><br />
            <input
              type="email"
              id="email"
              className={styles.formField}
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />


            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              className={styles.formField}
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />


          
            <label htmlFor="confirmPassword">Confirm Password:</label><br />
            <input
              type="password"
              id="confirmPassword"
              className={styles.formField}
              placeholder="Confirm password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          
          
            <div className={styles.loginButtons}>
            <button className={styles.signupBtn} onClick={handleClose}>Cancle</button>
            <button className={styles.signupBtn2}onClick={handleSubmit}>Sign up</button>
            <p className="mt-2" onClick={handleForgot}>Already have account?
            < a className={styles.signA} href= "#" onClick= {handleClose}>
            Login here </a></p>
            </div>
          </form>
          
        </Modal.Body>
        </div>
      </Modal>
      </>
  );
}