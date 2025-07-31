import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, MobileSidebar } from "../components";
import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
function RootLayout() {
  const { width, height } = useWindowSize();
  const location = useLocation();
  const hideSidebar = location.pathname.endsWith("/");
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="min-h-screen px-0  flex ">
      {!hideSidebar && (
        <>
          <div
            className={`hidden md:block fixed top-0 left-0 h-full w-0 md:w-64 bg-base-200  transition-transform duration-400 z-20 ${
              openSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>

          {width > 639 && width < 768 && (
            <div>
              <span
                onClick={() => setOpenSidebar(false)}
                className={`absolute top-0 left-0  ${
                  openSidebar ? "w-full" : "w-0"
                } h-full bg-black/80 z-10`}
              ></span>
              <div
                className={`block md:hidden w-64 absolute top-0 transition-all duration-300 ${
                  openSidebar ? "left-0" : "left-[-100%]"
                }  z-20 h-full bg-white`}
              >
                <Sidebar />
              </div>
            </div>
          )}

          {/* ============ Mobile sidebar =============================== */}
          {width < 640 && (
            <div>
              <span
                className={`absolute top-0 left-0  ${
                  openSidebar ? "w-full" : "w-0"
                } h-full bg-black/80 z-10`}
              ></span>
              <div
                className={`block  w-[80%] absolute top-0 transition-all duration-300 ${
                  openSidebar ? "left-0" : "left-[-100%]"
                }  z-20 h-full bg-white`}
              >
                <MobileSidebar setOpenSidebar={setOpenSidebar} />
              </div>
            </div>
          )}
        </>
      )}
      <div
        className={`h-full transition-all duration-400 w-full  ${
          openSidebar && !hideSidebar && width > 767 ? "ml-64" : "ml-0"
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
