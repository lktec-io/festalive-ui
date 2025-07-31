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
      <h4 style={{fontWeight:"500"}}>Top Events By Revenue</h4>
      <ResponsiveContainer >
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
