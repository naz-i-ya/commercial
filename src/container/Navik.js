import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Navik.module.css";

const Navik = () => {
  const [option, setOption] = useState("");
  const history = useHistory();

  useEffect(() => {
    setOption(option);
  }, [option]);

  const handleOption = (e) => {
    // console.log('e.target.value:', e.target.value);
    // console.log('e.target.defaultValue:', e.target.defaultValue);
    setOption(e.target.defaultValue);
    // console.log('Option set to:', option);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (option === "Upload Existing Contract") {
      // console.log(option, 'Redirecting to /newcontractpage');
      return history.push("/upload");
    } else if (option === "Continue Contracts") {
      return history.push("/continuecontract");
    }

    return history.push("/newcontract");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} onChange={handleOption}>
        <h1 className={styles.header}>Select Type Of Contract</h1>
        <div className={styles.form}>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="radio"
                id="contract"
                name="contract"
                defaultValue="New Contract"
              />
              <label style={{marginBottom:'1rem'}}>New Contract</label>

              <br />
            </div>
          </div>

          <div className={styles.selectContract}>
            <div className="col">
              <input
                type="radio"
                id="contract"
                name="contract"
                defaultValue="Continue Contracts"
              />
              <label>Continue Contracts</label>
            </div>
            <div className="col-md-3">
              <select
                name="choose_exist_contract"
                className={styles.formControl}
              >
                <option value="">113</option>
              </select>
            </div>
          </div>

          <div className={styles.selectContract}>
            <div className="col">
              <input
                type="radio"
                id="contract"
                name="contract"
                defaultValue="Select Previous Contracts"
              />
              <label>Select Previous Contracts</label>
            </div>
            <div className="col-md-3">
              <select
                name="choose_exist_contract"
                className={styles.formControl}
              >
                <option value="">No Contracts</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="radio"
                id="contract"
                name="contract"
                defaultValue="Upload Existing Contract"
              />
              <label style={{marginTop:"1rem"}}>Upload Existing Contract</label>
              <br />
            </div>
          </div>

          <div className={styles.next}>
            <button type="submit" className={styles.navikBtn}>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navik;
