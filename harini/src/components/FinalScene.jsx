import './FinalScene.css';

function FinalScene({ onRestart }) {
  return (
    <div className="scene final-scene">
      <div className="final-container">
        <h1>🎉 Happy Birthday! 🎉</h1>
        <p className="final-message">
          Thank you for being such an amazing person!
        </p>
        <h2 className="friendship-message">
          Happy Birthday Ri and Happy 1 Year Friendship Anniversary by Your Waste Fellow 💕
        </h2>
        <div className="confetti"></div>
        <button className="btn-primary restart-btn" onClick={onRestart}>
          🔄 Start Over
        </button>
      </div>
    </div>
  );
}

export default FinalScene;
