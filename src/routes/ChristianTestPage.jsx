import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChristianTestPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // You can use the username and password state variables to send the login request
    // If login is successful, navigate to the desired page using navigate('/path')
    // If login fails, show an error message to the user
  };

  return (
    <>
      <h1>Welcome to Christian's test page</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}