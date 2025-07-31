"use client";
import "../globals.css";
import "../components/index.css";

interface BookingsData {
  id: number;
  name: string;
  event: string;
  ticketsSold?: number;
  ticketType: number;
  payment: number;
  status: string;
  venue: string;
}

const Bookings: BookingsData[] = [
  {
    id: 1,
    name: "Apolinary Theonest",
    event: "Festival A",
    ticketType: 1,
    payment: 3000,
    status: "PAID",
    venue: "Main Hall"
  },
  {
    id: 2,
    name: "Jane Doe",
    event: "Festival B",
    ticketType: 2,
    payment: 2000,
    status: "PENDING",
    venue: "Arena"
  },
];


export const BookingsTable = () => {
  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Event
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Tickets Sold
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.event}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.ticketsSold}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  ${item.payment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
