"use client";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignupUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const navigate = useNavigate();

  const defaultProfilePic = "/assets/profile.jpg";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);

      // preview
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

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
    if (Object.keys(newErrors).length > 0) return;

    try {
      const data = new FormData();
      data.append("email", email.trim());
      data.append("password", password.trim());
      data.append("confirmPassword", confirmPassword.trim());

      if (profilePic) {
        data.append("profilePic", profilePic);
      } else {
        data.append("profilePic", defaultProfilePic); // fallback default
      }

      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/web/user/register`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Registration successful");
      navigate("/layout");
    } catch (error) {
      console.error(error);
      alert("Error occurred during registration");
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
            {/* email */}
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

            {/* password */}
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
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            {/* confirm password */}
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
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* profile image upload */}
            <div className="file-upload">
              <label>Upload Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="profile-preview"
                />
              )}
            </div>

            <button type="submit">Sign Up</button>
          </form>

          <p className="auth-signup-text">
            Have an account? <NavLink to="/login/user">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
