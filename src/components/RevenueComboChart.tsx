"use client";

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
        backgroundColor: "#ffede0",
        // marginTop: "27px",
        width:"480px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Inter",
        fontSize: "12px",
        borderRadius: "17px",
        padding: "10px",
        maxWidth: "600px",
        // margin: "0 auto",  
      }}
    >
      <h4 style={{ fontWeight: "500" }}>Ticket Sales Overtime</h4>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ResponsiveContainer width="90%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tickets" barSize={50} fill="#FF6F00" />
            <Line type="monotone" dataKey="revenue" stroke="#FF4500" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
