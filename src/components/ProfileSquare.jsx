import React from 'react';
import './ProfileSquare.css';

const ProfileSquare = ({ userData }) => {
  return (
    <div className="pfp-square">
      {userData?.avatar ? (
        <img src={userData.avatar} alt="Profile" />
      ) : (
        <div className="profile-initials">
          {userData?.name?.charAt(0) || 'U'}
        </div>
      )}
    </div>
  );
};

export default ProfileSquare;