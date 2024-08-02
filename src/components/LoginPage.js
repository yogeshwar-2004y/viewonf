import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform authentication (e.g., API call)
    // For simplicity, we'll just set the user as authenticated
    if (username === 'owner' && password === 'password') {
      onLogin(true);
      history.push('/home');
    } else if (username === 'user' && password === 'password') {
      onLogin(false);
      history.push('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
