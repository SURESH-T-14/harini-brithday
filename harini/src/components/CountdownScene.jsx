import { useState, useEffect } from 'react';
import './CountdownScene.css';

const COUNTDOWN_DURATION = 10000; // 10 seconds
const START_SECONDS = 23 * 3600 + 59 * 60 + 50; // 23:59:50

function CountdownScene({ onComplete }) {
  const [timer, setTimer] = useState('23:59:50');
  const [countdownStartTime, setCountdownStartTime] = useState(null);

  useEffect(() => {
    if (countdownStartTime === null) {
      setCountdownStartTime(Date.now());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsedTime = now - (countdownStartTime || now);
      const remainingTime = Math.max(0, COUNTDOWN_DURATION - elapsedTime);
      const elapsedSeconds = Math.floor((COUNTDOWN_DURATION - remainingTime) / 1000);

      let totalSeconds = START_SECONDS + elapsedSeconds;

      if (totalSeconds >= 86400) {
        totalSeconds -= 86400;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimer(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownStartTime, onComplete]);

  const quotes = [
    'A special moment is coming…',
    'Memories never fade…',
    'Get ready…',
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 2500);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div className="scene countdown-scene">
      <div className="countdown-container">
        <div className="timer-display">{timer}</div>
        <div className="quotes">
          {quotes.map((quote, idx) => (
            <p
              key={idx}
              className={`quote ${idx === quoteIndex ? 'active' : ''}`}
            >
              {quote}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountdownScene;
