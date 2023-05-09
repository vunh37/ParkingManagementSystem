import React, { Component } from 'react';
import './EmloyeesList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployees from './AddEmployees';

interface Employee {
  id: string;
  name: string;
  position: string;
}

interface EmployeesListState {
  employees: Employee[];
}

class EmployeesList extends Component<{}, EmployeesListState> {
  state = {
    employees: [
      { id: "1", name: 'John', position: 'Developer' },
      { id: "2", name: 'Mary', position: 'Designer' },
      { id: "3", name: 'David', position: 'Product Manager' },
    ],
  };

  addEmployee = (employee: Employee) => {
    const { employees } = this.state;
    const newEmployee = { ...employee, id: (employees.length + 1).toString() };
    const updatedEmployees = [...employees, newEmployee];
    this.setState({ employees: updatedEmployees });
  };

  editEmployee = (id: string, name: string, position: string) => {
    const { employees } = this.state;
    const employeeIndex = employees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      const updatedEmployee = { ...employees[employeeIndex], name, position };
      const updatedEmployees = [...employees];
      updatedEmployees[employeeIndex] = updatedEmployee;
      this.setState({ employees: updatedEmployees });
    }
  };

  deleteEmployee = (id: string) => {
    const { employees } = this.state;
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    this.setState({ employees: updatedEmployees });
  };

  render() {
    const { employees } = this.state;

    return (
      <div className="table-responsive">
       
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={() => this.editEmployee(employee.id, 'Tan', 'Manager')}>
                    Edit
                  </button>
                  <button onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddEmployees addEmployee={this.addEmployee} />
      </div>
      
    );
  }
}

export default EmployeesList;
