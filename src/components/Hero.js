import {React, useState} from "react";
import "../css/Hero.css";
import Logo from "../img/logo.png";
import Signup from "./Signup";
import Form from "./Form";
export default function Hero(props) {
  const [signUp, toggleSignUp] = useState(false);
  function toggle() {
    toggleSignUp(true);
  }

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
          <div className="paralelogram">
            <p className="paralelogramText">
              <b>Log in</b>
            </p>
          </div>
          <hr className="invisible"></hr>
          <Signup signUp={signUp} onClick={toggleSignUp}/>
          <Form signUp={signUp} contracts={ props.contracts }/>
        </div>
      </div>
    </div>
  );
}
