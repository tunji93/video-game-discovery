import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetails from "./pages/GameDetails";
import Homepage from "./pages/HomePage"
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Homepage /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;
