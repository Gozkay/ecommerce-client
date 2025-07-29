import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🛍 Welcome to EcomX</h1>
      <p>This is a simple home page to test routing.</p>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/register" style={{ marginRight: "1rem" }}>Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;