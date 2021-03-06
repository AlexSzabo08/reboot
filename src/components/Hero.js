import React from "react";
import "../css/Hero.css";
import Logo from "../img/logo.png";
export default function hero() {
  return (
    <div className="background">
      <div className="wrapper">
        <div className="one"></div>
        <div className="two">
          <img src={Logo} className="logoImage" />
          <hr className="underLogoLine" />
          <p className="motto">We don't want your data.</p>
        </div>
        <div className="three">
              <div className="paralelogram"><p className="paralelogramText"><b>Log in</b></p></div>
              <hr className="invisible"></hr>
              <div className="paralelogram-2"><p className="paralelogramText"><b>Sign up</b></p></div>
        </div>
      </div>
    </div>
  );
}
