import "../globals.css";
import "../components/index.css";
import { Sidebar } from "../components/Sidebar";
import { EventsTable } from "../components/EventsTable";

export default function Events() {
  return (
    <div className="all-components-arrangemnet">
      <Sidebar />
      <div className="inner-components">
        <div className="other-card-1">
          <EventsTable />
        </div>
      </div>
    </div>
  );
}
