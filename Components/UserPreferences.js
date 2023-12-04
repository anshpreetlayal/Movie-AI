import React, { useState } from 'react';

function UserPreferences({ userPreferences, onSave }) {
  const [preferences, setPreferences] = useState(userPreferences);

  const handlePreferenceChange = (preference, value) => {
    setPreferences(prevPreferences => ({
      ...prevPreferences,
      [preference]: value
    }));
  };

  const handleSavePreferences = () => {
    onSave(preferences);
   
  };
  return (
    <div className="user-preferences">
      <h2>User Preferences</h2>
      <div>
        <label htmlFor="favoriteGenre">Favorite Genre:</label>
        <select
          id="favoriteGenre"
          value={preferences.favoriteGenre}
          onChange={e => handlePreferenceChange('favoriteGenre', e.target.value)}
        >
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="Gory">Gory</option>
          <option value="Horror">Science-Fiction</option>
          <option value="Animation">Animation</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>


        </select>
      </div>
      <div>
        <label htmlFor="notificationPreference">Receive Notifications:</label>
        <input
          type="checkbox"
          id="notificationPreference"
          checked={preferences.receiveNotifications}
          onChange={e =>
            handlePreferenceChange('receiveNotifications', e.target.checked)
          }
        />
      </div>
      <button onClick={handleSavePreferences}>Save Preferences</button>
    </div>
  );
}

export default UserPreferences;
