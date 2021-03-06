import React from "react";
import "../css/Hero.css";
export default function SignUp(props) {
  if (props.signUp)
    return (
        <div className="flex">
      <div className="paralelogram-2">
        <input className="formInput" placeholder="nickname..."></input>
      </div>
      <div className="paralelogramButton">
      <p className="paralelogramInputText">
        <b>Done</b>
      </p>
    </div>
    </div>
    );
  else return null;
}
