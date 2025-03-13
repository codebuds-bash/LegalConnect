import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./../styles/auth.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".auth-container",
      { opacity: 0, y: 50 }, // Initial state (too dim)
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state (fully visible)
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" required placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" required placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Create password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Signup;
