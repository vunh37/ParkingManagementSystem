import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./root";
import UserManagement from "../components/user/UserManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/user-management",
        element: <UserManagement />,
      },
    ],
  },
  {
    path: "/login",
    element: "",
  },
]);

export default router;
