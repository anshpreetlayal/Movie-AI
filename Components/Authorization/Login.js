import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
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
    <View style={styles.container}>
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

<Button title="Log In" onPress={handleLogin} />

<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
  <Text style={styles.link}>Don't have an account? Sign Up</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
padding: 16,
},
title: {
fontSize: 24,
marginBottom: 16,
},
input: {
height: 40,
borderColor: "gray",
borderWidth: 1,
marginBottom: 12,
paddingHorizontal: 10,
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
