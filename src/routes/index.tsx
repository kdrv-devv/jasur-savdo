import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import People from "../components/home-components/people";
import Optom from "../components/home-components/optom";
import Firms from "../pages/firms";
import ListPage from "../pages/list-page";
import Employes from "../pages/employes";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <People />,
      },
      {
        path: "/optom",
        element: <Optom />,
      },
      {
        path: "/firms",
        element: <Firms />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/employes",
        element: <Employes />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
