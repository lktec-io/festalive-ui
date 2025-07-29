"use client";
import React from "react";
import "../../src/components/index.css";
import { Link } from "react-router-dom";
export const CardData = [
  {
    id: 1,
    icon: "/book-image-black.svg",
    iconactive: "/book-check.svg",
    title: "Total Events",
    description: "All the Events that you have hosted",
    amount: "30",
    link: "/",
  },

  {
    id: 2,
    icon: "/ticket-black.svg",
    iconactive: "/ticket.svg",
    title: "Ticket Sales",
    description: "Total Events",
    amount: "744",
    link: "/",
  },
  {
    id: 3,
    icon: "/bankote.svg",
    iconactive: "/banknote.svg",
    title: "Revenue",
    description: "The total amount of money that you have made on all events.",
    amount: "5,0434,050",
    link: "/bookings",
  },
];

export const Card = () => {
  return (
    <div className="card-container">
      {CardData.map((item) => (
        <Link to={item.link} key={item.id} className="card">
          <div className="card-content">
            <img
              src={item.iconactive}
              alt={item.title}
              width={32}
              height={32}
            />
            <span className="amount">{item.amount}</span>
            <h3>{item.title}</h3>
            {/* <p className="description">{item.description}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const ExtraCard = () => {
  return (
    <div className="card-container">
      <Link to="/" className="card">
        <div className="card-content">
          <img src="/add.svg" alt="" width={32} height={32} />

          <h3>Add Event</h3>
        </div>
      </Link>
    </div>
  );
};
