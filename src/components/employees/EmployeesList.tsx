import React, { Component } from "react";
import "./EmloyeesList.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployees from "./AddEmployees";
import CustomTable from "../common/CustomTable";

interface Employee {
  id: string;
  name: string;
  position: string;
}

interface EmployeesListState {
  employees: Employee[];
}

const EmployeesList = () => {
  const header = ["id", "name", "age"];
  const data: any[] = [{ id: 1, name: "vu", age: 20 }];
  return (
    <div>
      <CustomTable headers={header} data={data} />
    </div>
  );
};

export default EmployeesList;
