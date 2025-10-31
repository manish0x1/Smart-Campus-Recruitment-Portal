import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/"); // After login, back to homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm border border-blue-100">
        <h3 className="text-center text-2xl font-bold text-blue-600 mb-6">Student Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="password" name="password" placeholder="Password"
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
          <p className="text-center mt-3 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
