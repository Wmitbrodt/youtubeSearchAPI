import React from 'react';
import VideoListItem from './video_list_item';

// in a functional component props is an argument, in a class component, it's available anywhere.
const VideoList = (props) => {
  // save a reference to this item in the video reference
  const videoItems = props.videos.map((video) => {
    // map over each video in the array and create a video list item:
                          // provide a key for each element in the list
    return <VideoListItem key={video.etag} video={video} />
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
