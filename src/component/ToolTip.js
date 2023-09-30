import React, { useState } from "react";
import styles from "./Tooltip.module.css";

const ToolTip = ({ text,visible }) => {
  

  
  return (
    <div
      className={styles["tooltip-container"]}
      
    >
      {visible && 
      <div className={styles["tooltip-right"]}>{text}</div>
      }
    </div>
  );
};

export default ToolTip;
