"use client";
import "../globals.css";
import "../components/index.css";
import "../components/table.css";

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
    venue: "Main Hall",
  },
  {
    id: 2,
    name: "Jane Doe",
    event: "Festival B",
    ticketType: 2,
    payment: 2000,
    status: "PENDING",
    venue: "Arena",
  },
];

export const BookingsTable = () => {
  return (
    <div className="table-wrapper">
      <h4>Recent Bookings</h4>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
            <th>Name</th>
              <th>Event</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.event}</td>
                <td>Tzs. {item.payment || "-"}</td>
                <td>{item.status || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
