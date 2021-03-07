import React from "react";
import "../css/Post.css";
import ProfilePic from "../img/profilepic.jpg";
import Photo from "./Photo";
import Video from "./Video";
export default function hero(props) {
  return (
    <div className="background-post">
      <div className="a">
        <img src={ProfilePic} className="profilePic" />
        <p className="postText">
          <b>El Pompel</b> has posted a new <b>picture</b>
        </p>
      </div>
      <hr className="postLine" />
      <p className="textDescription">Haide coaie la interval</p>
      <div className="postContent">
        <Video></Video>
      </div>
      <hr className="invisible"></hr>
      <p className="textDescription">69 likes</p>
      <hr className="invisible"></hr>
    </div>
  );
}
