import React, { useRef, useState } from 'react';
//style
import '../styles/Home.css';
import background from '../assets/images/img1.jpg';
import musicFile from '../assets/music/music.mp3';
import { FaPlay, FaPause, FaChevronDown } from 'react-icons/fa'; // react-icons'dan ikonları import ediyoruz

const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <h1>Gulzada</h1>
      <h2>Qyz Uzatuu</h2>
      <p>20.11.2024</p>

      <div className="play-button" onClick={toggleMusic}>
        {isPlaying ? (
          <FaPause size={22} color="#990011" /> // Pause ikonu
        ) : (
          <FaPlay size={22} color="#990011" /> // Play ikonu
        )}
        
      </div>
      <div className="scroll-down" onClick={scrollDown}>
        <FaChevronDown size={28} color="#FCF6F5" />
      </div>
      <audio ref={audioRef} src={musicFile} loop />
    </div>
  );
};

export default Home;
