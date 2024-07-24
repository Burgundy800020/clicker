import React, { useState } from "react";
import "./Clicker.css"
export default function Clicker(){
    const [clickerValue, updateClickerValue] = useState(10);
  return(
    <div className="container">
        <div className="clickerParent">
            <div className="clickerDisplay">
                Current Value: {clickerValue}
            </div>
            <div className="clickerButtonContainer">
                <button
                    className="btn"
                    onClick={()=>updateClickerValue(clickerValue+1)}    
                >
                Increase
                </button>
                <button
                    className="btn"
                    onClick={()=>updateClickerValue(0)}    
                >
                Reset
                </button>
                <button
                    className="btn"
                    onClick={()=>updateClickerValue(Math.max(0, clickerValue-1))}    
                >
                Decrease
                </button>
            </div>
        </div>
    </div>
  );
}