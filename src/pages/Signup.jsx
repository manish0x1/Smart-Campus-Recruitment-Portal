import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm border border-blue-100">
        <h4 className="text-center text-2xl font-bold text-blue-600 mb-6">Create Account</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="email" name="email" placeholder="Email"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="password" name="password" placeholder="Password"
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" required />
          <select name="role" onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none">
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Sign Up</button>
          <p className="text-center mt-3 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
