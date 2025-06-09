// MainLayout.js
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="app-interface">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}