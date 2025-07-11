import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
function RootLayout() {
  return (
    <div className="w-full min-h-screen bg-base-200">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
