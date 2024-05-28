// src/VideoComponent.js
import React from 'react';
import ReactPlayer from 'react-player'
import "../css/VideoComponent.css"
;
const VideoComponent = () => {
  return (
    <div className='d-flex justify-content-center'>
       <ReactPlayer
        url="public/VideoHospitalC.mp4"
        controls={false}
        muted={true}
        playing={true}
        loop={true}
        width="900px"
        height="600px"
      />
    </div>
    
  );
};
export default VideoComponent;



