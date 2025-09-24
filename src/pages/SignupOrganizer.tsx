"use client";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";
import "../pages/org-auth.css";
import axios from "axios";

const organizerTypes = [
  "Event Management Company",
  "Venue Owner",
  "Independent Promoter",
  "Corporate Events",
  "Wedding Planner",
  "Non-Profit Organization",
];

const businessLocations = [
  "Dar es Salaam",
  "Nairobi",
  "Arusha",
  "Mwanza",
  "Dodoma",
  "Mbeya",
  "Other",
];

export default function SignupOrganizer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    organizationName: "",
    organizerType: "",
    contactPerson: "",
    phone: "",
    businessLocation: "",
    website: "",
    taxId: "",
    description: "",
    socialMedia: "",
  });
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const navigate = useNavigate();

  const defaultProfilePic = "/assets/profile.jpg";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);

      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (profilePic) {
        data.append("profilePic", profilePic);
      } else {
        data.append("profilePic", defaultProfilePic);
      }

      const response = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/web/organizer/register`,
  data,
  { headers: { "Content-Type": "multipart/form-data" } }
);


      console.log("Organizer registered successfully:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/layout");
    } catch (error: any) {
      console.error("Error registering organizer:", error);
      if (error.response) {
        alert(
          `Registration failed: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else {
        alert("Registration failed: Network error or server is down");
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = (password: string) => password.length >= 6;

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
        formData.organizationName &&
        formData.organizerType &&
        formData.contactPerson &&
        formData.phone
      );
    }
    return true;
  };

  const nextStep = () => {
    if (isStepValid()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="org-auth-wrapper">
      <div className="org-auth-left">
        <img
          src="/assets/celeb.jpg"
          alt="Organizer Signup"
          className="org-auth-image"
        />
      </div>

      <div className="org-auth-right">
        <div className="org-auth-form">
          <img
            src="/assets/festalivelogo.png"
            alt="Festalive"
            className="org-auth-logo"
          />
          <h2 className="org-auth-title">Register Your Organization</h2>

          <div className="org-progress-dots">
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`org-dot ${step === dot ? "org-active-dot" : ""}`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="org-form">
            {step === 1 && (
              <div className="org-step1">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password (min 8 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="org-next-btn"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="org-step2">
                <input
                  type="text"
                  name="organizationName"
                  placeholder="Organization Name"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <select
                  name="organizerType"
                  value={formData.organizerType}
                  onChange={handleChange}
                  className="org-select"
                  required
                >
                  <option value="">Select Organizer Type</option>
                  {organizerTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person Name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Business Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="org-input"
                  required
                />
                <div className="org-step-buttons">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="org-back-btn"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="org-next-btn"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="org-step3">
                <select
                  name="businessLocation"
                  value={formData.businessLocation}
                  onChange={handleChange}
                  className="org-select"
                >
                  <option value="">Business Location</option>
                  {businessLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="website"
                  placeholder="Website (optional)"
                  value={formData.website}
                  onChange={handleChange}
                  className="org-input"
                />
                <input
                  type="text"
                  name="taxId"
                  placeholder="Tax ID/VAT Number (optional)"
                  value={formData.taxId}
                  onChange={handleChange}
                  className="org-input"
                />
                <textarea
                  name="description"
                  placeholder="Brief description of your organization"
                  value={formData.description}
                  onChange={handleChange}
                  className="org-textarea"
                  rows={4}
                />
                <input
                  type="text"
                  name="socialMedia"
                  placeholder="Social Media Links (optional)"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="org-input"
                />

                {/* profile image upload */}
                <div className="file-upload">
                  <label>Upload Organization Logo</label>
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

                <div className="org-step-buttons">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="org-back-btn"
                  >
                    Back
                  </button>
                  <button type="submit" className="org-submit-btn">
                    Complete Registration
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="org-auth-signup-text">
            Already have an account?{" "}
            <NavLink to="/login/organizer">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
