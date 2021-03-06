import React from "react";
import "../css/Hero.css";
import "../css/Post.css";
import ProfilePic from "../img/profilepic.jpg";
import Photo from "../img/photo.png";
export default function hero() {
  return (
    <div className="background-post">
      <div className="a">
        <img src={ProfilePic} className="profilePic" />
        <p className="postText">
        <b>El Pompel</b> has posted a new <b>picture</b>
      </p>
      </div>
      <hr className="postLine"/>
      <p className="textDescription">Haide coaie la interval</p>
      <img src={Photo}/>
    </div>
  );
}
