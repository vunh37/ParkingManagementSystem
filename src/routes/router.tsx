import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./root";
import UserManagement from "../components/user/UserManagement";
import Login from "../components/login/Login";
import EmployeesList from "../components/employees/EmployeesList";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/user-management",
    element: <RootComponent />,
    children: [
      {
        path: "/user-management",
        element: <UserManagement />,
      },
      {
        path:"/user-management/employeeslist",
        element:<EmployeesList />,
      },
    ],
  },
  {
    path: "/",
    element: <Login onLogin={(username: string, password: string) => {
      // Make a login API request using the provided credentials
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // If the response is successful, redirect to the user management page
          window.location.href = '/user-management';
        } else {
          // If the response is not successful, show an error message
          alert('Login failed. Please try again.');
        }
      })
      .catch(error => {
        // If there is an error, log it to the console
        console.error('Error logging in:', error);
      });
    }} />,
  },
]);


export default router;
