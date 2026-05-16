import { useState, useRef } from 'react';
import './VideoScene.css';

function VideoScene({ onNext }) {
  const [showPopup, setShowPopup] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    onNext();
  };

  const handleStartVideo = () => {
    setShowPopup(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <div className="scene video-scene">
      {showPopup && (
        <div className="video-popup-overlay">
          <div className="video-popup">
            <div className="popup-content">
              <p className="popup-message">
                rii indha video 10min iruku 😂 kandipa ne somberi thanam paaduva onu download pani aprm paaru ilaa oru 10min time eduthu paaru
              </p>
            </div>
            <button className="btn-primary popup-btn" onClick={handleStartVideo}>
              Got It! 🎬 Start Video
            </button>
          </div>
        </div>
      )}

      <div className="video-container">
        <div className="video-placeholder">
          <h2>🎬 A Special Video for You</h2>
          <p>Something special I prepared 💕</p>
          <video
            ref={videoRef}
            id="videoElement"
            className="memory-video"
            controls
            controlsList="nodownload"
            onEnded={handleVideoEnd}
          >
            <source src="assets/videos/harni-birthday-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-controls">
          <button className="btn-primary" onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoScene;
