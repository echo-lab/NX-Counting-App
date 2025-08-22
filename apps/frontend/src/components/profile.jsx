import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/profile.css';
import profileicon from '../assests/profileicon.png';

// Display user profile and handle logout
function Profile({ name }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle logout logic
  const handleLogout = (callback) => {
    window.localStorage.clear(); // Clear local storage
    if (typeof callback === 'function') {
      callback();
    }
  };

  const handleLogoutClick = () => {
    handleLogout(() => {
      navigate('/'); // Navigate to home page after logout
    });
  };

  return (
    <div>
      <div className="container">
        <div className="card p-4 profileCard">
          <div className="profileimage d-flex flex-column">
            <button className="btn btn-secondary">
              <img src={profileicon} height="100" alt="Profile Icon" />
            </button>
            <span className="name mt-3">{name}</span>
            <div className="d-flex mt-2">
              <button className="btn1 btn-dark" onClick={handleLogoutClick}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

