import React from 'react';

function Bgvideo() {
  return (
    <div className="video-background">
      <video controls autoPlay muted loop>
        <source src="../assets/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}

export default Bgvideo;
