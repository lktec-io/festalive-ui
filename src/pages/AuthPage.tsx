"use client";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

export default function AuthPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="./assets/part.jpg" alt="Welcome" className="auth-image" />
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <h2>Welcome Back</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="auth-forgot">Forgot password?</a>
            <button type="submit">Login</button>
          </form>

          <p className="auth-signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}