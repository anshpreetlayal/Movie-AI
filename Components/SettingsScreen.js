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


const styles = StyleSheet.create({
    containerLight: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 20,
    },
    containerDark: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#333333",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#000000",
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      width: "100%",
    },
    optionTitle: {
      fontSize: 18,
      color: "#000000",
    },
    optionButton: {
      backgroundColor: "#6B9362",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 10,
      width: "100%",
      alignItems: "center",
    },
    optionButtonText: {
      fontSize: 16,
      color: "#ffffff",
    },
  });
  

export default SettingsScreen;