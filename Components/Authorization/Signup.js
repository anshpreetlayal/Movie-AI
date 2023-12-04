import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
}