import { useState } from 'react';
import './Balloon.css';

function Balloon({ index, onBurst }) {
  const [isBurst, setIsBurst] = useState(false);

  const handleClick = () => {
    if (!isBurst) {
      setIsBurst(true);
      onBurst(index);
    }
  };

  const randomLeft = 10 + (index % 5) * 18;
  const randomTop = 20 + (Math.floor(index / 5) % 3) * 25;

  return (
    <div
      className={`balloon ${isBurst ? 'burst' : ''}`}
      style={{
        left: `${randomLeft}%`,
        top: `${randomTop}%`,
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="balloon-body">
        <div className="balloon-shine"></div>
      </div>
      <div className="balloon-string"></div>
    </div>
  );
}

export default Balloon;
