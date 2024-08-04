import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup (e.g., API call)
    // For simplicity, we'll just set the user as authenticated
    if (username && password) {
      onSignup(role === 'owner');
      navigate('/home');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="owner">Hotel Owner</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
