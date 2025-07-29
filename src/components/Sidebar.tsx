"use client";
import "../../src/components/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";

export const SidebarData = [
  {
    id: 1,
    icon: "../assets/layout-dashboard-black.svg",
    iconactive: "../assets/layout-dashboard.svg",
    title: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    icon: "../assets/book-check-black.svg",
    iconactive: "../assets/book-check.svg",
    title: "My Events",
    link: "/events",
  },
  {
    id: 3,
    icon: "../assets/ticket-black.svg",
    iconactive: "../assets/ticket.svg",
    title: "Ticket Sales",
    link: "/tickets",
  },
  {
    id: 4,
    icon: "../assets/layout-dashboard-black.svg",
    iconactive: "../assets/layout-dashboard.svg",
    title: "Bookings",
    link: "/bookings",
  },
  {
    id: 5,
    icon: "../assets/message-square-text-black.svg",
    iconactive: "../assets/message-square-text.svg",
    title: "Messages",
    link: "/messages",
  },
  {
    id: 6,
    icon: "../assets/credit-card-black.svg",
    iconactive: "../assets/credit-card.svg",
    title: "Payouts",
    link: "/payouts",
  },
  {
    id: 7,
    icon: "../assets/megaphone-black.svg",
    iconactive: "../assets/megaphone.svg",
    title: "Promote",
    link: "/promote",
  },
  {
    id: 8,
    icon: "../assets/users-round-black.svg",
    iconactive: "../assets/users-round.svg",
    title: "Team",
    link: "/team",
  },
  {
    id: 9,
    icon: "../assets/settings-black.svg",
    iconactive: "../assets/settings.svg",
    title: "Settings",
    link: "/settings",
  },
];

export const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ProfileCard />
        <div className="sidebar-content-container">
          <ul>
            {SidebarData.map((item) => {
              const isActive = item.id === activeId;
              const isHovered = item.id === hoveredId;

              return (
                <li
                  key={item.id}
                  className={isActive ? "activeItem" : ""}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link
                    to={item.link}
                    className="sidebar-items"
                    onClick={() => setActiveId(item.id)}
                  >
                    <div className="sidebar-item">
                      <img
                        src={
                          isActive || isHovered ? item.iconactive : item.icon
                        }
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span style={{ marginLeft: "10px" }}>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
