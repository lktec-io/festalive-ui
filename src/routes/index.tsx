import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "../components/Shimmer.tsx";
import { Layout } from "../Layout.tsx";

const Auth = lazy(() => import("../pages/AuthPage.tsx"));
const SelectUserType = lazy(()=> import('../pages/SelectUserType.tsx'));
const CreatorSignUp = lazy(() => import("../pages/SignupCreator.tsx"));
const OrganizerSignup = lazy(() => import("../pages/SignupOrganizer.tsx"));
const UserSignup = lazy(() => import("../pages/SignupUser.tsx"));
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
        <Route path="/" element={<SelectUserType />} />
        <Route path="/signup/creator" element={<CreatorSignUp />} />
        <Route path="/signup/organizer" element={<OrganizerSignup />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login/:role" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />     
        <Route path="/layout" element={<Layout />}>
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