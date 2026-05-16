import './OpeningScene.css';

function OpeningScene({ onStart }) {
  return (
    <div className="scene opening-scene">
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>
      <div className="opening-content">
        <h1>Something Special is Waiting for You...</h1>
        <button className="btn-glow start-btn" onClick={onStart}>
          START
        </button>
      </div>
    </div>
  );
}

export default OpeningScene;
