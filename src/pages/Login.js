import React, { useState } from 'react';
import axiosi from '../api/axiosConfig';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosi.post('http://localhost:5000/api/auth/login', form);
      const { token, user } = res.data;

      // Save token to local storage
      localStorage.setItem('ecom_token', token);
      localStorage.setItem('ecom_user', JSON.stringify(user));

      alert('Login successful!');
      // Navigate to dashboard here later
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;