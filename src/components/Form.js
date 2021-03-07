import React, { useState } from "react";
import "../css/Hero.css";
export default function SignUp(props) {

  const profile = props.contracts.profile

  const [value, setValue] = useState('')

  const inputChange = (event) => {
    setValue(event.target.value)
    console.log(value)
  }
  
  const signUp = async () => {
    await profile.create(value)
  }
   
  if (props.signUp)
    return (
        <div className="flex">
      <div className="paralelogram-2">
        <input className="formInput"
               value={value} 
               onChange={inputChange} 
               placeholder="nickname..."/>
      </div>
      <div className="paralelogramButton" onClick={signUp} >
      <p className="paralelogramInputText">
        <b>Done</b>
      </p>
    </div>
    </div>
    );
  else return null;
}
