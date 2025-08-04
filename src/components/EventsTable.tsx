"use client";
import "../globals.css";
import "../components/index.css";
import "../components/table.css";

interface EventsData {
  id: number;
  name: string;
  event: string;
  ticketsSold?: number;
  location?: string;
  earnings?: string;
  ticketType: number;
  notickets?:number;
  payment: number;
  status: string;
  venue: string;
  action?: string;
}

const Events: EventsData[] = [
  {
    id: 1,
    name: "Apolinary Theonest",
    event: "Festival A",
    ticketType: 1,
    notickets:120,
    location:"City life",
    payment: 3000,
    status: "PAID",
    action:"delete || update",
    venue: "Main Hall",
  },
  
];

export const EventsTable = () => {
  return (


    <div className="events-table-wrapper">
      <h3>Events</h3>
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
            {Events.map((item) => (
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
