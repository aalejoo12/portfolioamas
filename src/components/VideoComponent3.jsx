import React from 'react'
import ReactPlayer from 'react-player'

const VideoComponent3 = () => {
  return (
    <div className='d-flex justify-content-center videos'>
    <ReactPlayer
     url="public/PokémonApi.mp4"
     controls={false}
     muted={true}
     playing={true}
     loop={true}
     width="900px"
     height="600px"
   />
 </div>
  )
}

export default VideoComponent3