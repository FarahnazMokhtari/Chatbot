// Popup.jsx
import React from 'react';
import './popup.css'; // Import your CSS file for styling
import Chatbot from './Chatbot';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <Chatbot/>
      </div>
    </div>
  );
};

export default Popup;
