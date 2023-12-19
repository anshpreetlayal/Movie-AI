import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";


const SettingsScreen = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [receiveNotifications, setReceiveNotifications] = useState(true);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    
   const toggleNotifications = () => {
    setReceiveNotifications((prev) => !prev);
  };


};

export default SettingsScreen;