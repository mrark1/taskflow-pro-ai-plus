import "./MainLayout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">

      <Sidebar
        open={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="layout-content">

        <Navbar
          toggleSidebar={() => setSidebarOpen(true)}
        />

        <main className="main-content">

          <Outlet />

        </main>

        <Footer />

      </div>

    </div>
  );
};

export default MainLayout;