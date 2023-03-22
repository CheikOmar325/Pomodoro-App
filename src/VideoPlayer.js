import React from 'react';
import YouTube from 'react-youtube';

// Define the VideoPlayer component as a functional component
const VideoPlayer = () => {
  // Define the ID of the YouTube video to be played
  const videoId = 'jfKfPfyJRdk';

  // Define the options for the YouTube player
  const opts = {
    height: '600',
    width: '1000',
    playerVars: {
      autoplay: 1,
    },
  };

  // Render the VideoPlayer component
  return (
    <div className="video-container">
      <h2>Some music to stay productive?🎵</h2>
      {/* Render the YouTube player component with the specified video ID and options */}
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

// Export the VideoPlayer component as the default export of this module
export default VideoPlayer;
