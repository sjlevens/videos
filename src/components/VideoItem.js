import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <a href={video.id.videoId} className="header">
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
