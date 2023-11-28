import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation as if yet, will implement a stronger validation
    if (username === 'example_user' && password === 'password123') {
      onLogin(username); // Pass the username to the parent component or function
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

}

export default Login;
