import "../globals.css";
import "../components/index.css";
import { Sidebar } from "../components/Sidebar";
import { Card, ExtraCard } from "../components/Cards";
import { TicketSalesPie } from "../components/TicketSalesPie";
import { RevenueComboChart } from "../components/RevenueComboChart";
import { BookingsTable } from "../components/BookingsTable";
import { Comments } from "../components/Comments";

export default function Home() {
  return (
    <div className="all-components-arrangemnet">
      <Sidebar />
      <div className="inner-components">
        <div className="cards-extracard">
          <Card />
          <ExtraCard />
        </div>

        {/* Second cards / with charts ja ., zinaanzia hapa */}

        <div className="other-card-1">
          <RevenueComboChart />
          <TicketSalesPie />
        </div>

        {/* End of the cards with charts */}

        <div className="other-card-1">
          <BookingsTable />
          <Comments/>
        </div>
      </div>
    </div>
  );
}
