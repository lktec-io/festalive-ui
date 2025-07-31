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

// Custom colors
const COLORS = ["#FF6F00", "#FFD3B2", "#FFEDE0"];

export const TicketSalesPie = () => {
  return (
    <div>
      <ResponsiveContainer>
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
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
