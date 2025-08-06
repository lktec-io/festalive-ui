"use client";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

export default function SignupUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

     try {
      await axios.post("http://localhost:8000/api/user/register", {
        email,
        password,
        confirmPassword,
      });
      alert("Registration successful ");
      navigate("/");
    }
    catch (error) {
      console.error(error);
      alert("Error occurred during registration");
    }
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Ja Do signup logic here
      alert("Signup successful");
    }

  };
  

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="../assets/celeb.jpg" alt="Welcome" className="auth-image" />
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <img src="/assets/festalivelogo.png" alt="Logo" />
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="input-wrapper">
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "input-error" : ""}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="input-wrapper">
              <div className="password-field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "input-error" : ""}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit">Sign Up</button>
          </form>

          <p className="auth-signup-text">
            Have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
