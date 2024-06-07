import React from 'react';
import './LoopingVideo.css'; 

const LoopingVideo = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay muted loop>
        <source src="./src/Video/Video/video-3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoopingVideo;