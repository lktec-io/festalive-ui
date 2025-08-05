import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "../components/Shimmer.tsx";
import { Layout } from "../Layout.tsx";
// import LoginPage from "../pages/LoginPage.tsx";

const Auth = lazy(() => import("../pages/AuthPage.tsx"));
const Login  = lazy(() => import("../pages/LoginPage.tsx"));
const Signup  = lazy(() => import("../pages/SignupPage.tsx"));
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
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
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