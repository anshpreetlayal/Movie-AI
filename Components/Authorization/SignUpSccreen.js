import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";



const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    // Fetch image from Unsplash API
    fetch(
      ""
    )
      .then((response) => response.json())
      .then((data) => {
        setBackgroundImage(data.urls.regular);
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
      });
  }, []);

  const handleSignUp = () => {
    if (!username || !email || !password || password !== confirmPassword) {
      setError("Please fill in all fields and make sure passwords match.");
      return;
    }
    setError("");
    setIsSuccessModalVisible(true);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button title="Sign Up" onPress={handleSignUp} color="#26A65B" />

        <Modal
          visible={isSuccessModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Registration successful!</Text>
              <Button title="Close" onPress={handleModalClose} />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    color: "white",
  },
  error: {
    color: "red",
    marginBottom: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default SignUpScreen;