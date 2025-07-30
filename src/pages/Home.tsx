import "../globals.css";
import { Sidebar } from "../components/Sidebar";
import { Card, ExtraCard } from "../components/Cards";
import { TicketSalesChart } from "../components/TicketSalesChart";

export default function Home() {
  return (
    <div className="all-components-arrangemnet">
      <Sidebar />
      <div className="inner-components">
        <div className="cards-extracard">
          <Card />
          <ExtraCard />
        </div>
        <div className="charts">
          <TicketSalesChart />
          <TicketSalesChart />
        </div>
      </div>
    </div>
  );
}