import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
}  from "react-native";


const LoginScreen = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const handleLogin = () => {
    if (!usernameOrEmail || !password) {
      setError("Please enter both username/email and password.");
      return;
    }
    setError("Login successful!");
    setUsernameOrEmail("");
    setPassword("");
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button title="Log In" onPress={handleLogin} color="#26A65B" />

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
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
  link: {
    color: "blue",
    marginTop: 16,
    textAlign: "center",
  },
});

export default LoginScreen;

