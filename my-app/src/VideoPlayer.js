import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { IconButton, Button, Modal, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';

function VideoPlayer({ video, user }) {
  const [showNotification, setShowNotification] = useState(false);
  const [totalSolEarned, setTotalSolEarned] = useState(0.01); // Example initial SOL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEarnSol = () => {
    setShowNotification(true);
    setTotalSolEarned(prev => prev + 0.01); // Increase the earned SOL
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notification disappears after 3 seconds
  };

  const handleVideoEnd = () => {
    handleEarnSol(); // Trigger notification when video ends
  };

  const handleUserIconClick = () => {
    setIsModalOpen(true); // Open the modal when user icon is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="videoPlayer">
      <ReactPlayer
        url={video.url}
        playing
        loop={false}  // Video will not loop
        width="100%"
        height="100%"
        className="reactPlayer"
        onEnded={handleVideoEnd} // Trigger when video ends
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
        <IconButton onClick={handleUserIconClick}>
          <PersonIcon />
        </IconButton>
      </div>

      {/* Modal to display user info and total SOL earned */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="user-info-modal-title"
        aria-describedby="user-info-modal-description"
      >
        <Box className="modalContent">
          <h2 id="user-info-modal-title">User Information</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Total SOL Earned:</strong> {totalSolEarned.toFixed(2)} SOL</p>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default VideoPlayer;
