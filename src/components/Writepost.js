import React from "react";
import "../css/Writepost.css";
export default function hero() {
  return (
    <div className="background">
      <div className="postWindow">
        <p className="newPostTitle">
          <b>New post</b>
        </p>
        <hr></hr>
        <div className="bar">
          <div className="paralelogram">
            <p className="paralelogramText">Photo</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Video</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Text</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Audio</p>
          </div>
        </div>
        <hr className="invisible"></hr>
        <div className="paralelogram">
          <p className="paralelogramText">Upload your photo</p>
        </div>
      </div>
    </div>
  );
}
