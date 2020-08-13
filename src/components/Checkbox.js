import React, { Component } from "react";
import "./Task.css";

const Checkbox = (props) => {
  return (
    <div>
      <div className="cbx">
        <input id="cbx" type="checkbox" onChange={props.onChange} />
        <label htmlFor="cbx"></label>
        <svg width="24" height="24" viewbox="0 0 15 14" fill="none">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "24px", height: "24px" }}
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <fegaussianblur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur"
            ></fegaussianblur>
            <fecolormatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              result="goo"
            ></fecolormatrix>
            <feblend in="SourceGraphic" in2="goo"></feblend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Checkbox;
