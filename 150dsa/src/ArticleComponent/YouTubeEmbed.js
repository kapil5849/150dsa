import React from 'react';
import './ArticleComponentCSS/YouTubeEmbed.css';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-container">
      <iframe
        className="youtube-embed"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

