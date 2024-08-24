import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';

function VideoPlayer({ video }) {
  const [showNotification, setShowNotification] = useState(false);

  const handleEarnSol = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notification disappears after 3 seconds
  };

  return (
    <div className="videoPlayer">
      <ReactPlayer
        url={video.url}
        playing
        loop
        width="100%"
        height="100%"
        className="reactPlayer"
      />
      <div className="videoPlayer__actions">
        <IconButton>
          <FavoriteIcon /> {video.likes}
        </IconButton>
        <IconButton>
          <CommentIcon /> {video.comments}
        </IconButton>
        <IconButton onClick={handleEarnSol}>
          <ShareIcon /> {video.shares}
        </IconButton>
      </div>
      <div className="product__container">
        <img src="https://via.placeholder.com/100" alt="Product" className="product__image" />
        <Button
          variant="contained"
          color="primary"
          href="https://example.com/product"
          target="_blank"
          rel="noopener noreferrer"
          className="product__button"
        >
          Buy Now
        </Button>
      </div>

      {showNotification && (
        <div className="coin"></div>
      )}
      {showNotification && (
        <div className="notification">
          +0.01 SOL Earned!
        </div>
      )}

      <div className="videoPlayer__bottomNavigation">
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <ExploreIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default VideoPlayer;
