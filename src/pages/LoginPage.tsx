"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 🔐 Proceed with login
      console.log("Logging in:", { email, password });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="./assets/part.jpg" alt="Welcome" className="auth-image" />
      </div>

      <div className="auth-right">
        
        <div className="auth-form">
          <img src="/assets/festalivelogo.png" alt="Logo" />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="input-wrapper">
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <a href="#" className="auth-forgot">Forgot password?</a>

            <button type="submit">Login</button>
          </form>

          <p className="auth-signup-text">
            Don’t have an account? <NavLink to="/signup-user">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
