//Root layout
import RootLayout from "./layouts/RootLayout";
//pages
import {
  Home,
  Login,
  Register,
  Dashboard,
  MainSubject,
  SubjectId,
  NewSubject,
  Assignment,
} from "./pages";
//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "subjects",
          element: <MainSubject />,
        },
        {
          path: "subjects/:id",
          element: <SubjectId />,
        },
        {
          path: "subjects/new",
          element: <NewSubject />,
        },
        {
          path: "assignments",
          element: <Assignment />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
