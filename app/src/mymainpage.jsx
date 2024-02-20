// MyMainPage.jsx
import React, { useState } from 'react';
import Popup from './Popup.jsx';
import './mymainpage.css'; // Import your CSS file
import RobotIcon from './assets/Robot.png';
//import Home from './assets/mainpage.png';

const MynewMainPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mymain-page-container">
      {/* Your main page content */}
      <button onClick={handleOpenPopup} className="robot-icon-button">
        {/* Your icon for opening the popup */}
        <img src={RobotIcon} alt="Robot Icon" width="50" height="50" />
      </button>

      {showPopup && <Popup onClose={handleClosePopup} />}

      <div className="fartext-block">
      <img src={Home} style={{width:'1024' , height:'400'}}/>

      </div>
    </div>
  );
};

export default MynewMainPage;
