import React, { useState } from "react";
import styles from "./Upload.module.css";

import Dropzone from "react-dropzone";

export default function Upload() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

  return (
    <div className={styles.box}>
    <div className={styles.container}>
    <div className={styles.upload}>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
    
   {/*<div className="d-flex row">*/}
   <div className={styles.row}>
    <div className={styles.col}>
        <label>Select Contract Type: </label>
    
       
   <select className={styles.select}>
  <option value="1">Vendor to Buyer</option>
  <option value="2">Buyer to Vender</option>
</select>
</div>
</div>
        
    </div>
</div>
      
  );
}