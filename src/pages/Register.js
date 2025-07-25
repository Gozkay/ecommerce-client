import { useState } from 'react';
import axiosi from '../api/axiosConfig'; 

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosi.post('/auth/register', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto mt-10 border rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="block w-full mb-2 p-2 border rounded" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full mb-2 p-2 border rounded" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full mb-2 p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
      {message && <p className="mt-2 text-center text-sm text-green-700">{message}</p>}
    </form>
  );
}