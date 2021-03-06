import React from 'react';

const VideoDetail = ({video}) => {
  // react will try to render the video detail before it's ready
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  // every youtube url is the same, except for the video id at the very end:
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )

};


export default VideoDetail;
