import "../globals.css";
import "../components/index.css";
import { Sidebar } from "../components/Sidebar";
import { Card, ExtraCard } from "../components/Cards";
import { TicketSalesPie } from "./TicketSalesPie";
import { RevenueComboChart } from "./RevenueComboChart";

export default function Home() {
  return (
    <div className="all-components-arrangemnet">
      <Sidebar />
      <div className="inner-components">
        <div className="cards-extracard">
          <Card />
          <ExtraCard />
        </div>
        <div className="other-card">
          <div className="card-left">
            <RevenueComboChart />
          </div>
          <div className="card-right">
            <TicketSalesPie />
          </div>
        </div>
      </div>
    </div>
  );
}
