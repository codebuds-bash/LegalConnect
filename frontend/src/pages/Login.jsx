import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./../styles/auth.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".auth-container",
      { opacity: 0, y: 50 }, // Initial state (too dim)
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state (fully visible)
    );
  }, []);

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" required placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
