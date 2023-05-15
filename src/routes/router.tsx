import { createBrowserRouter } from "react-router-dom";
import RootComponent from "./root";
import UserManagement from "../components/user/UserManagement";
import Login from "../components/login/Login";
import EmployeesList from "../components/employees/EmployeesList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from "../components/employees/AddEmployees";
import CustomersList from "../components/customer/CustomersList";
import AddCustomer from "../components/customer/AddCustomer";
import Parking from "../components/parking/Parking";
import SellTicket from "../components/ticket/SellTicket";
import Staticstic from "../components/staticstic/Staticstic";

const router = createBrowserRouter([
  {
    path: "/parking-management",
    element: <RootComponent />,
    children: [
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "employee-list",
        element: <EmployeesList />,
      },
      {
        path: "add-employee",
        element: <AddEmployee mode="add" />,
      },
      {
        path: "employee/:employeeId",
        element: <AddEmployee mode="edit" />,
      },
      {
        path: "customer-list",
        element: <CustomersList />,
      },
      {
        path: "add-customer",
        element: <AddCustomer mode="add" />,
      },
      {
        path: "parking",
        element: <Parking />,
      },
      {
        path: "sell-ticket",
        element: <SellTicket />,
      },
      {
        path: "statistic",
        element: <Staticstic />,
      },
    ],
  },
  {
    path: "/",
    element: <Login onLogin={(username: string, password: string) => {}} />,
  },
]);

export default router;
