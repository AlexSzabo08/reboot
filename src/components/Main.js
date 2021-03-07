import { React, useState } from "react";
import "../css/Main.css";
import Nav from "./Nav";
import Post from "./Post";
import Photo from "./Photo";
export default function Hero() {
  const [signUp, toggleSignUp] = useState(false);
  function toggle() {
    toggleSignUp(true);
  }

  return (
    <div>
      <Nav />
      <div className="background">
        <div className="wrapper-feed">
          <div className="doi">
              <Post/> 
              <Post/>
          </div>
        </div>
      </div>
    </div>
  );
}
