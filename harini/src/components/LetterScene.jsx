import { useState, useEffect } from 'react';
import './LetterScene.css';

function LetterScene({ letter, onNext }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = letter;

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayedText, fullText]);

  const isComplete = displayedText.length === fullText.length;

  return (
    <div className="scene letter-scene">
      <div className="letter-container">
        <div className="letter-content">
          <h2>💌 A Letter Just for You</h2>
          <div className="letter-text">
            <p className="letter-line magic-text">
              {displayedText}
              <span className={`cursor ${isComplete ? 'hidden' : ''}`}>|</span>
            </p>
          </div>
        </div>
        {isComplete && (
          <button className="btn-primary" onClick={onNext}>
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}

export default LetterScene;
