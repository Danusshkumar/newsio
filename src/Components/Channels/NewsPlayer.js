import React from 'react';

const NewsPlayer = ({ channelName, youtubeEmbedLink, channelImage }) => {

  return (
    <div className="news-player">
      <a href={youtubeEmbedLink} target="_blank" rel="noopener noreferrer">
        <img className = "news-channel-img" src={channelImage} alt={channelName} />
      </a>
    </div>
  );
};

export default NewsPlayer;