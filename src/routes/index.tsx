// /routes/index.tsx

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loaded pages:

const Tickets = lazy(() => import("../pages/Tickets.tsx"));
const Promote = lazy(() => import("../pages/Promote.tsx"));
const Events = lazy(() => import("../pages/Events.tsx"));
const Bookings = lazy(() => import("../pages/Bookings.tsx"));
const NotFound = lazy(() => import("../pages/NotFound.tsx"));

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
