import React, { useState, useRef } from 'react';
import './Meditation.css'
import sound from '../assets/sound.mp3'

const Meditation = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  //for sound player 

  const [audio] = useState(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  const startTimer = () => {
    audio.play();
    setIsPlaying(true);
    if (intervalId === null) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    stopTimer();
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setTimer(0);
  };


  return (
    <div className='medi-box'>
      <p>Timer: {timer} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Meditation;
