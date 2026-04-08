import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Characters from "../views/Characters/Characters";
import Favorites from "../views/Favorites/Favorites";
import AboutCharacter from "../views/AboutCharacter/AboutCharacter";
import MainLayout from "../views/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/character/:id",
        element: <AboutCharacter />,
      },
    ],
  },
]);

export default router;
