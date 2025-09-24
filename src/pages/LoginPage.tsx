"use client";
import { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

export default function LoginPage() {
  const { role } = useParams<{ role: string }>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    if (!role) {
      alert("Role is missing in URL!");
      return;
    }

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const res = await axios.post(`${API_BASE_URL}/web/${role.toLowerCase()}/login`, {
  email: email.trim(),
  password: password.trim(),
});



      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "user") navigate("/layout");
      else if (user.role === "creator") navigate("/layout");
      else if (user.role === "organizer") navigate("/layout");
      else navigate("/layout");
    } catch (error: any) {
      setErrors({ password: error.response?.data?.message || "Network error" });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="/assets/part.jpg" alt="Welcome" className="auth-image" />
      </div>
      <div className="auth-right">
        <div className="auth-form">
          <img src="/assets/festalivelogo.png" alt="Logo" />
          <h2>Login as {role?.toLowerCase()}</h2>
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
                <span className="toggle-visibility" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <a href="#" className="auth-forgot">Forgot password?</a>
            <button type="submit">Login</button>
          </form>
          <p className="auth-signup-text">
            Don’t have an account? <NavLink to="/">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
