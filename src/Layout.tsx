import { Sidebar } from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import "../src/components/index.css"

export const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
};
