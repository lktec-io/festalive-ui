"use client";
import "../globals.css";
import "../components/index.css";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export const AddedEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://185.194.216.146:82/web/event/all");
        setEvents(response.data); // hakikisha backend inarudisha array
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="layout-container">
      <Sidebar />
      <main className="layout-content">
        <h2 className="dashboard-title">📅 My Events</h2>
        {loading ? (
          <p className="loading-text">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="no-events">No events found. Add one to get started!</p>
        ) : (
          <div className="events-grid">
            {events.map((event, idx) => (
              <div key={idx} className="event-card">
                <h3>{event.eventName}</h3>
                <p><strong>Date:</strong> {event.eventDate}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Description:</strong> {event.description}</p>
                {event.phone && <p><strong>Phone:</strong> {event.phone}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
