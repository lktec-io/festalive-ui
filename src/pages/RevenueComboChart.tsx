"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Fake data
const data = [
  { month: "Jan", revenue: 2400, tickets: 100 },
  { month: "Feb", revenue: 3800, tickets: 150 },
  { month: "Mar", revenue: 3200, tickets: 120 },
  { month: "Apr", revenue: 5000, tickets: 200 },
  { month: "May", revenue: 6200, tickets: 240 },
];

export const RevenueComboChart = () => {
  return (
    <div
      style={{
        marginTop:"27px",
        width: "100%",
        height: "300px",
        display: "flex",
        fontFamily:"Inter",
        fontSize:"12px",
        flexDirection:"column",
        justifyContent: "start",
        alignItems: "center",
        marginLeft:"-30px",
        marginRight:"0",
        gap:"0"
  
      }}
    >
      <h3>Ticket Sales Overtime</h3>
      <ResponsiveContainer width="70%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tickets" barSize={20} fill="#FF6F00" />
          <Line type="monotone" dataKey="revenue" stroke="#FF4500" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};