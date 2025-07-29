import "../globals.css"
import { Sidebar } from "../components/Sidebar";
import { Card, ExtraCard } from "../components/Cards";

export default function Home() {
  return (
    <div>
      <div className="all-components-arrangemnet">
        <Sidebar />
        <Card />
        <ExtraCard/>
      </div>
    </div>
  );
}