
import React, { useState } from "react";
import axios from "axios";
import "./index.css"; // Keep your existing styles

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(""); // To store success or error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required!";
    if (!formData.password) tempErrors.password = "Password is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post("http://localhost:5000/signin", formData);
        localStorage.setItem("token", res.data.token); // Store token for authentication
        setMessage("Sign-In Successful!");
        setFormData({ email: "", password: "" });

        // Redirect to dashboard after login (if needed)
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } catch (error) {
        setMessage(error.response?.data?.message || "Login failed. Try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign In</h2>
      {message && <p className="message">{message}</p>} {/* Show message */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;