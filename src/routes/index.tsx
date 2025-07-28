// /routes/index.tsx

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// const Dashboard = lazy(() => import("../pages/Dashboard.tsx"));
const Tickets = lazy(() => import("../pages/Tickets.tsx"));
const Promote = lazy(() => import("../pages/Promote.tsx"));
const Events = lazy(() => import("../pages/Events.tsx"));
const Bookings = lazy(() => import("../pages/Bookings.tsx"));
const NotFound = lazy(() => import("../pages/NotFound.tsx"));

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Suspense>
  );
}
