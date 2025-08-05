"use client";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

const categories = ["DJ", "Band", "Host", "Dancer", "Comedian", "Speaker"];
const locations = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];
const socialPlatforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "Facebook",
  "Twitter",
];

type CreatorFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  stageName: string;
  bio: string;
  socials: string[];
  socialPlatform: string;
  currentSocial: string;
  categories: string[];
  currentCategory: string;
  location: string;
  phone: string;
  website: string;
};

export default function SignupCreator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CreatorFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    stageName: "",
    bio: "",
    socials: [],
    socialPlatform: "Instagram",
    currentSocial: "",
    categories: [],
    currentCategory: "",
    location: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = (password: string) => password.length >= 6;

  const addCategory = (category: string) => {
    if (category && !formData.categories.includes(category)) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
        currentCategory: "",
      }));
    }
  };

  const removeCategory = (categoryToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((cat) => cat !== categoryToRemove),
    }));
  };

  const addSocial = () => {
    if (formData.currentSocial) {
      setFormData((prev) => ({
        ...prev,
        socials: [
          ...prev.socials,
          `${formData.socialPlatform}: ${formData.currentSocial}`,
        ],
        currentSocial: "",
      }));
    }
  };

  const removeSocial = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      socials: prev.socials.filter((_, i) => i !== index),
    }));
  };

  const isStepValid = () => {
    if (step === 1) {
      return (
        validateEmail(formData.email) &&
        validatePassword(formData.password) &&
        formData.password === formData.confirmPassword
      );
    }
    if (step === 2) {
      return (
        formData.fullName &&
        formData.stageName &&
        formData.bio &&
        formData.categories.length > 0 &&
        formData.location
      );
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
              />
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
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password (min 6 chars)"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
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
                  required
                />
                <input
                  type="text"
                  name="stageName"
                  placeholder="Stage/Creator Name"
                  value={formData.stageName}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="bio"
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                />

                <div className="combined-select-container">
                  <div className="combined-select-wrapper">
                    <div className="combined-select-tags">
                      {formData.categories.map((cat) => (
                        <span key={cat} className="tag">
                          {cat}
                          <button
                            type="button"
                            onClick={() => removeCategory(cat)}
                            className="remove-tag"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      <select
                        name="currentCategory"
                        value={formData.currentCategory}
                        onChange={(e) => {
                          handleChange(e);
                          addCategory(e.target.value);
                        }}
                        className="combined-select"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option
                            key={cat}
                            value={cat}
                            disabled={formData.categories.includes(cat)}
                          >
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="location-select"
                  required
                >
                  <option value="">Select Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                <div className="step-buttons">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="full-width-btn back-btn"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="full-width-btn"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="socials-input">
                  <select
                    name="socialPlatform"
                    value={formData.socialPlatform}
                    onChange={handleChange}
                  >
                    {socialPlatforms.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="currentSocial"
                    placeholder="Username"
                    value={formData.currentSocial}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={addSocial}>
                    Add
                  </button>
                </div>
                <div className="tags">
                  {formData.socials.map((link, index) => (
                    <span key={index} className="tag">
                      {link}{" "}
                      <button
                        type="button"
                        onClick={() => removeSocial(index)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website (optional)"
                  value={formData.website}
                  onChange={handleChange}
                />
                <div className="step-buttons">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="full-width-btn back-btn"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="full-width-btn finish-btn"
                  >
                    Finish Signup
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