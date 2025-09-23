"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Fake data — swap with your API later
const data = [
  { month: "Jan", tickets: 120 },
  { month: "Feb", tickets: 200 },
  { month: "Mar", tickets: 150 },
  { month: "Apr", tickets: 250 },
  { month: "May", tickets: 300 },
];

export const TicketSalesBar = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tickets" fill="#FF6F00" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
