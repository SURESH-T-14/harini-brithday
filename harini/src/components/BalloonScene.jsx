import { useState } from 'react';
import Balloon from './Balloon';
import PhotoModal from './PhotoModal';
import './BalloonScene.css';

function BalloonScene({ captions, photos, onComplete }) {
  const [burstCount, setBurstCount] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState('');
  const totalBalloons = 15;

  const handleBalloonBurst = (index) => {
    const newCount = burstCount + 1;
    setBurstCount(newCount);

    // Show photo
    setSelectedPhoto(photos[index]);
    setSelectedCaption(captions[index]);

    // Check if all balloons are burst
    if (newCount === totalBalloons) {
      setTimeout(onComplete, 2000);
    }
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    setSelectedCaption('');
  };

  return (
    <div className="scene balloon-scene">
      <div className="balloon-bg"></div>
      <div className="balloons-container">
        {[...Array(totalBalloons)].map((_, index) => (
          <Balloon
            key={index}
            index={index}
            onBurst={handleBalloonBurst}
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          caption={selectedCaption}
          onClose={closePhoto}
        />
      )}

      <div className="burst-counter">
        Balloons Burst: {burstCount}/{totalBalloons}
      </div>
    </div>
  );
}

export default BalloonScene;
