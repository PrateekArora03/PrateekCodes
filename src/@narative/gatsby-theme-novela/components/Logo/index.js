import React from "react";
import logo from "../../../../assets/logo.png";

export default function Logo() {
  return (
    <div>
      <img src={logo} alt={"logo"} style={{ "vertical-align": "middle" }}></img>
      <h1
        style={{
          display: "inline-block",
          color: "black",
          fontSize: "23px",
          "vertical-align": "middle"
        }}
      >
        Prateek <span style={{ color: "#7A8085" }}>Arora</span>
      </h1>
    </div>
  );
}
