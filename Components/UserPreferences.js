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

}