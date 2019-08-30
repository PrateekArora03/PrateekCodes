/** @jsx jsx */
// import React from "react";
import logo from "../../../../assets/logo.png";
import { jsx } from "theme-ui";

export default function Logo() {
  return (
    <div>
      <img src={logo} alt={"logo"} style={{ "vertical-align": "middle" }}></img>
      <h1
        sx={{
          display: "inline-block",
          color: "primary",
          fontSize: "23px",
          "vertical-align": "middle",
          transition: "colorModeTransition"
        }}
      >
        Prateek <span style={{ color: "#7A8085" }}>Arora</span>
      </h1>
    </div>
  );
}
