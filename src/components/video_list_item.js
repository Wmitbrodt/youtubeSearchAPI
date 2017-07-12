import React from 'react';

// video list will now show a single video thumbnail
                       // {video} is the same as calling props.video
const VideoListItem = ({video, onVideoSelect}) => {
//  const video = props.video;
const imageUrl = video.snippet.thumbnails.default.url; // from youtube (see network)
  return (
        // when this li is clicked, call onVideoSelect function and pass video 👆🏻
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;
