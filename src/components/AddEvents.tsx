"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../globals.css";
import "../components/index.css";
import "../pages/auth.css";

export default function AddEventForm() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    location: "",
    description: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace this URL with your backend event API
      const response = await axios.post(
        "http://185.194.216.146:82/web/event/add",
        formData
      );
      console.log("Event added successfully:", response.data);
      alert("Event added successfully!");
      navigate("/added"); // redirect to events page or wherever you want
    } catch (error: any) {
      console.error("Error adding event:", error);
      alert("Failed to add event. Check console for details.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <img src="/assets/event.jpg" alt="Add Event" className="auth-image" />
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <img src="/assets/festalivelogo.png" alt="Festalive" className="auth-logo" />
          <h2>Add New Event</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="eventName"
              placeholder="Event Name"
              value={formData.eventName}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Short Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="step3-optional-input" 
            />

          <button type="submit" className="full-width-btn">
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
