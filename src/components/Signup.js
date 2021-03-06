import React from "react";
import "../css/Hero.css";
export default function SignUp(props) {
    if(!props.signUp)
  return (
    <div className="paralelogram-2" onClick={props.onClick}>
      <p className="paralelogramText">
        <b>Sign up</b>
      </p>
    </div>
  );
  else return null;
}
