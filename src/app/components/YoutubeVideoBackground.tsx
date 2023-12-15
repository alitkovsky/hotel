'use client';
import YouTube from "react-youtube";

const YoutubeVideoBackground = ({ videoId }) => {
   const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        loop: 1,
        playlist: videoId,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 0,
        vq: 'hd1080',
      },
    };

    const onReady = (event) => {
      event.target.playVideo();
    };

  return (
   <>
   <div className="absolute bg-cover min-w-full w-full h-full min-h-full top-0 left-0 right-0 bottom-0 -z-10">
      <YouTube
         videoId={videoId}
         opts={opts}
         onReady={onReady}
         className="absolute min-w-full w-full h-full min-h-full top-0 left-0 right-0 bottom-0 -z-10"
      />
      </div>
   </>
  )
}

export default YoutubeVideoBackground;