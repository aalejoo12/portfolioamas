import React from 'react'
import ReactPlayer from 'react-player'

const VideoComponent3 = () => {
  return (
    <div className='d-flex justify-content-center videos'>
    <ReactPlayer
     url="https://youtu.be/-iuLKvTJUzA"
     controls={false}
     muted={true}
     playing={true}
     loop={true}
     width="800px"
     height="500px"
     
   />
 </div>
  )
}

export default VideoComponent3