"use client";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

export default function SignupPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="./assets/celeb.jpg" alt="Welcome" className="auth-image" />
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <h2>Welcome</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
            {/* <a href="#" className="auth-forgot">Forgot password?</a> */}
            <button type="submit">Sign Up</button>
          </form>

          <p className="auth-signup-text">
            Have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}