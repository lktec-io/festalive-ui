"use client";
import "../../src/components/index.css";
import React, { useState } from "react";
import Link from "next/link";
import { ProfileCard } from "./ProfileCard";

export const SidebarData = [
  {
    id: 1,
    icon: "/layout-dashboard-black.svg",
    iconactive: "/layout-dashboard.svg",
    title: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    icon: "/book-check-black.svg",
    iconactive: "/book-check.svg",
    title: "My Events",
    link: "/events",
  },
  {
    id: 3,
    icon: "/ticket-black.svg",
    iconactive: "/ticket.svg",
    title: "Ticket Sales",
    link: "/tickets",
  },
  {
    id: 4,
    icon: "/layout-dashboard-black.svg",
    iconactive: "/layout-dashboard.svg",
    title: "Bookings",
    link: "/bookings",
  },
  {
    id: 5,
    icon: "/message-square-text-black.svg",
    iconactive: "/message-square-text.svg",
    title: "Messages",
    link: "/messages",
  },
  {
    id: 6,
    icon: "/credit-card-black.svg",
    iconactive: "/credit-card.svg",
    title: "Payouts",
    link: "/payouts",
  },
  {
    id: 7,
    icon: "/megaphone-black.svg",
    iconactive: "/megaphone.svg",
    title: "Promote",
    link: "/promote",
  },
  {
    id: 8,
    icon: "/users-round-black.svg",
    iconactive: "/users-round.svg",
    title: "Team",
    link: "/team",
  },
  {
    id: 9,
    icon: "/settings-black.svg",
    iconactive: "/settings.svg",
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
                    href={item.link}
                    className="sidebar-items"
                    onClick={() => setActiveId(item.id)}
                  >
                    <div className="sidebar-item">
                      <img
                        src={
                          isActive || isHovered
                            ? item.iconactive
                            : item.icon
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
