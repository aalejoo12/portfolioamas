// src/VideoComponent.js
import React from 'react';
import ReactPlayer from 'react-player'
import "../css/VideoComponent.css"
;
const VideoComponent2 = () => {
  return (
    <div className='d-flex justify-content-center videos'>
       <ReactPlayer
       url="https://youtu.be/scNcEqjliuc"
       controls={false}
       muted={true}
       playing={true}
       loop={true}
       width="800px"
       height="500px"
       
      />
    </div>
    
  );
};
export default VideoComponent2;



