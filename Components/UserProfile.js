import React from 'react';

function UserProfile({ username, email, avatar }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <img src={avatar} alt="User Avatar" />
        <div>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          {/* Add more user information or options as needed */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;