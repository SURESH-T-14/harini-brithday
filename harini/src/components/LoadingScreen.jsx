import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loader-animation">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
        <h2 className="loading-text">Preparing something special...</h2>
        <p className="loading-subtext">🎉 Get ready to celebrate! 🎉</p>
      </div>
      <div className="stars-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-star"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: (3 + Math.random() * 2) + 's',
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
