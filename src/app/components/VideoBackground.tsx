'use client';
import React from 'react';

const VideoBackground = ({ videoSource }) => {
  return (
      <video
         autoPlay
         loop
         muted
         playsInline
         className="object-cover top-0 left-0 w-full h-full overflow-hidden -z-10"
         src={videoSource}
         >
         Your browser does not support the video tag.
      </video>
  )
}

export default VideoBackground;