import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "../components/Shimmer.tsx";
import { Layout } from "../Layout.tsx";


const Home = lazy(() => import("../pages/Home.tsx"));
const Tickets = lazy(() => import("../pages/Tickets.tsx"));
const Promote = lazy(() => import("../pages/Promote.tsx"));
const Events = lazy(() => import("../pages/Events.tsx"));
const Bookings = lazy(() => import("../pages/Bookings.tsx"));
const NotFound = lazy(() => import("../pages/NotFound.tsx"));

export default function Router() {
  return (
    <Suspense fallback={<Shimmer />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="promote" element={<Promote />} />
          <Route path="events" element={<Events />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
