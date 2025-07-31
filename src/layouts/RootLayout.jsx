import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { useLocation } from "react-router-dom";
function RootLayout() {
  const location = useLocation();
  const hideSidebar = location.pathname.endsWith("/");
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="min-h-screen px-0 flex  ">
      {!hideSidebar && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-base-200  transition-transform duration-400 z-20 ${
            openSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </div>
      )}
      <div
        className={`h-full transition-all duration-400 w-full  ${
          openSidebar && !hideSidebar ? "ml-64" : "ml-0"
        }`}
      >
        {!hideSidebar && <Navbar setOpenSidebar={setOpenSidebar} />}
        <main className="h-[calc(100%-4rem)] overflow-y-auto  bg-base-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
