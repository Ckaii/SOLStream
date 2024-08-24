import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const history = useHistory();

  const goToReels = () => {
    history.push('/reels');
  };

  return (
    <div className="home">
      <h1>Welcome to TikTok-Inspired App</h1>
      <button className="home__button" onClick={goToReels}>
        Go to Reels
      </button>
    </div>
  );
}

export default Home;
