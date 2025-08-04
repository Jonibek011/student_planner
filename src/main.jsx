import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//toast
import { ToastContainer } from "react-toastify";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </GlobalContextProvider>
);
