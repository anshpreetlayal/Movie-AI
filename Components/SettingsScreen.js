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

// const logout
//const useraccount

return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Receive Notifications</Text>
        <Switch value={receiveNotifications} onValueChange={toggleNotifications} />
      </View>
      

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => {
        }}
      >
        <Text style={styles.optionButtonText}>Additional Setting</Text>
      </TouchableOpacity>
    </View>
  );

};

export default SettingsScreen;