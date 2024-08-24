import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css';

const videos = [
  {
    id: 1,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    likes: 120,
    comments: 45,
    shares: 10,
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/html/movie.mp4',
    likes: 230,
    comments: 56,
    shares: 20,
  },
  // 更多视频...
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'down' && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="app" onWheel={(e) => handleScroll(e.deltaY > 0 ? 'down' : 'up')}>
      <VideoPlayer video={videos[currentIndex]} />
    </div>
  );
}

export default App;
