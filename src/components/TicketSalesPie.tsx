"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "VIP", value: 400 },
  { name: "Regular", value: 700 },
  { name: "Early Bird", value: 300 },
];

const COLORS = ["#FF6F00", "#e1a97eff", "#a35822ff"];

export const TicketSalesPie = () => {
  return (
    <div
      style={{
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
        backgroundColor: "#ffede0",
        padding: "10px",
        // margin: "0 auto",
      }}
    >
      <h4 style={{ fontWeight: "500" }}>Top Events By Revenue</h4>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ResponsiveContainer width="90%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
