import { useContext } from "react";
import { AuthenContext } from "../components/context/AuthenContext";
import { redirect } from "react-router-dom";
import RootComponent from "./root";
import Login from "../components/login/Login";

const ProtectedRoute = ({ children }: any) => {
  const authContext = useContext(AuthenContext);
  if (authContext.userID == -1) return <Login></Login>;

  return <>{children}</>;
};

export default ProtectedRoute;
