import React from "react";
import styles from "./Previous.module.css";


const NewContract = () => {
 
  return (
    <div>
      <div>
        <div className={styles.myContainer}>
          <form className="" action="">
            <h1 className={styles.header}>NAVIK - A Contract Automation tool</h1>
            <div className="row">
              <div className="col">
                <h4 >
                  Nature of Contract
                </h4>

                <div className={styles.noc}>
                  <label>
                    <input
                      
                      type="radio"
                      id="nocr"
                      name="contract"
                      value="nda"
                    />{" "}
                    NDA
                  </label>
               
                 
                  <label >
                    <input
                      
                      type="radio"
                      id="nocr"
                      name="contract"
                      value="Buyer To Vendor"
                    />
                    Buyer To Vendor
                  </label>

                  <label>
                    <input
                      
                      type="radio"
                      id="nocr"
                      name="contract"
                      value="Vendor To Buyer"
                    />
                    Vendor To Buyer
                  </label>
                  </div>
                  <br />
                </div>
            
              <div className="col formgroup">
              <h4>
                  Stage Of Contract
                </h4>
                <div className={styles.soc}>
                  
                    <label>Initial/ RFP</label>
                    <input className={styles.checkbox} type="checkbox" />
                  

                  
                    <label>Offer</label>
                    <input className={styles.checkbox} type="checkbox" />
                  
                  
                    <label>Negotiations</label>
                    <input className={styles.checkbox} type="checkbox" />
                  
                  
                    <label>Signed/Execution</label>
                    <input className={styles.checkbox} type="checkbox" />
                  
                </div>
              </div>
              <div className="w-100"></div>
              <div class="col forml">
                
                <h4 > Scope</h4>
                <div className={styles.scope}>
                  <label>
                    Product
                    <input className={styles.checkmark} type="checkbox" />
                  </label>
                  <br />

                  <label>
                    Services
                    <input className={styles.checkmark} type="checkbox" />
                  </label>
                  <br />

                  <label>
                    Software
                    <input className={styles.checkmark}  type="checkbox" />
                  </label>
                  <br />

                  <label>
                    HR
                    <input className={styles.checkmark} type="checkbox" />
                  </label>
                  <br />

                  <label>
                    Real estate 
                    <input className={styles.checkmark} type="checkbox" />                   
                  </label>
                  <br /><br />
                  <div className={styles.lfield}>
                    <label for="reviewer ">Reviewer:</label>
                    <input
                      type="text"
                      id="reviewer"
                      placeholder="Enter Email"
                      name="reviewer"
                    />
                    <br />
                    <br />

                    <label for="party">Name of contracting party:</label>
                    <input
                      type="text"
                      id="party"
                      placeholder="Enter Name"
                      name="party"
                    />
                    <br />
                    <br />
                  </div>
                </div>
              </div><br /><br />
              <div className="col textfield ">
                <div className={styles.rfield}>
                <label for="value">Value Of The Contract:</label>
                <input
                  type="text"
                  id="value"
                  placeholder="Enter Value"
                  name="value"
                />
                <br />
                <br />
                <label for="date">Date open:</label>
                <input type="date" id="date" name="date" />
                <br /> <br /><br />
                <label for="approver">Approver's Email:</label>
                <input
                  type="text"
                  id="approver"
                  placeholder="Enter Email"
                  name="approver"
                /><br /><br />
                <label for="reviewer">Reviewer Sales/Commercials:</label>
                <input
                  type="text"
                  id="reviewer"
                  placeholder="Enter Email"
                  name="reviewer"
                /><br /><br />
                <label for="legal">Reviewer Legal:</label>
                <input
                  type="text"
                  id="legal"
                  placeholder="Enter Email"
                  name="legal"
                />
                <br /><br />
                <label for="finance">Reviewer Finance:</label>
                <input
                  type="text"
                  id="finance"
                  placeholder="Enter Email"
                  name="finance"
                />
                <br /><br />
                <label for="mail">Vendor's Mail:</label>
                <input
                  type="text"
                  id="mail"
                  placeholder="Enter Email"
                  name="mail"
                />
                <br />
                </div>
                <button  className={styles.preBtn}>Go To Analysis</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContract;
