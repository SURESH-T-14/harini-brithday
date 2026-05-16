import { useEffect, useState } from 'react';
import './CakeScene.css';

function CakeScene({ onComplete }) {
  const [countdown, setCountdown] = useState(3);
  const [cakeBlown, setCakeBlown] = useState(false);

  useEffect(() => {
    // Start 3-2-1 countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // After 3 seconds, blow out candle
    const blowTimeout = setTimeout(() => {
      setCakeBlown(true);
      clearInterval(countdownInterval);
    }, 3000);

    // After candle blows, trigger completion
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(blowTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="scene cake-scene">
      <div className="cake-container">
        <div className={`cake ${cakeBlown ? 'blown' : ''}`}>
          <div className="cake-body">
            <div className="cake-layer cake-layer-top"></div>
            <div className="cake-layer cake-layer-middle"></div>
            <div className="cake-layer cake-layer-bottom"></div>
            <div className="cake-plate"></div>
          </div>
          <div className={`candle ${cakeBlown ? 'blown' : ''}`}>
            <div className="flame"></div>
          </div>
        </div>
        <div className="cake-message">
          {countdown > 0 && !cakeBlown && (
            <div className="countdown-text">{countdown}</div>
          )}
          {countdown <= 0 && !cakeBlown && (
            <div className="blow-text">Time to Blow!</div>
          )}
          {cakeBlown && <div className="blown-text">🎉 Wishes Come True!</div>}
        </div>
      </div>
      <div className="smoke-container" id="smokeContainer"></div>
    </div>
  );
}

export default CakeScene;
