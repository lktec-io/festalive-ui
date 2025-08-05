"use client";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

export default function SignupCreator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    bio: "",
    socials: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword
      );
    }
    if (step === 2) {
      return formData.fullName && formData.bio;
    }
    return true;
  };

  const nextStep = () => {
    if (isStepValid()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Creator Signup:", formData);
    // TODO: Submit to backend
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img
          src="/assets/celeb.jpg"
          alt="Join Festalive"
          className="auth-image"
        />
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <img
            src="/assets/festalivelogo.png"
            alt="Festalive"
            className="auth-logo"
          />
          <h2>Join as a Creator</h2>

          <div className="progress-dots">
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`dot ${step === dot ? "active-dot" : ""}`}
              ></span>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="full-width-btn"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <textarea
                  name="bio"
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                ></textarea>
                <div className="step-buttons">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="full-width-btn"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="full-width-btn back-btn"
                  >
                    Back
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="text"
                  name="socials"
                  placeholder="Social Links (Instagram, YouTube...)"
                  value={formData.socials}
                  onChange={handleChange}
                />
                <div className="step-buttons">
                  <button type="submit" className="full-width-btn finish-btn">
                    Finish Signup
                  </button>

                  <button
                    type="button"
                    onClick={prevStep}
                    className="full-width-btn back-btn"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </form>

          <p className="auth-signup-text">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
