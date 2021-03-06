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
              <button className="button">Log in</button>
              <hr className="invisible"></hr>
              <button className="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}
