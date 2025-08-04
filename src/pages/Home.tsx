import "../globals.css";
import "../components/index.css";
import { Card, ExtraCard } from "../components/Cards";
import { TicketSalesPie } from "../components/TicketSalesPie";
import { RevenueComboChart } from "../components/RevenueComboChart";
import { BookingsTable } from "../components/BookingsTable";
import { Comments } from "../components/Comments";

export default function Home() {
  return (
  <>
      <div className="cards-extracard">
        <Card />
        <ExtraCard />
      </div>

      <div className="other-card-1">
        <RevenueComboChart />
        <TicketSalesPie />
      </div>

      <div className="other-card-1">
        <BookingsTable />
        <Comments />
      </div>
      </>
  
  );
}
