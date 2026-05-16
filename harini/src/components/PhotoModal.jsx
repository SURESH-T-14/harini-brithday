import { useEffect } from 'react';
import './PhotoModal.css';

function PhotoModal({ photo, caption, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="photo-modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={photo} alt="Memory" className="modal-image" />
        <p className="modal-caption">{caption}</p>
      </div>
    </div>
  );
}

export default PhotoModal;
