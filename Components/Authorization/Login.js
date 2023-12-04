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