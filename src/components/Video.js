import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
export default function hero() {
  return (
    <div className="background-post">
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
        </Video>
    </div>
  );
}
