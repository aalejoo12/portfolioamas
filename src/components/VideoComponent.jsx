// src/VideoComponent.js
import React from 'react';
import ReactPlayer from 'react-player'
import "../css/VideoComponent.css"
;
const VideoComponent = () => {
  return (
    <div className='d-flex justify-content-center videos'>
       <ReactPlayer
       url="https://youtu.be/bbZAnSNT04w"
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
export default VideoComponent;



