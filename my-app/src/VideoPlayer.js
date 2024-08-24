import React from 'react';
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
        <IconButton>
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
