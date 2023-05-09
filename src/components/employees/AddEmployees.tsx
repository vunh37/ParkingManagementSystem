import React, { Component } from 'react';
import './AddEmployees.scss'

interface Props {
    addEmployee: (employee: { id: string, name: string, position: string }) => void;
  }

class AddEmployees extends Component<Props> {
  state = {
    id: '',
    name: '',
    position: ''
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, name, position } = this.state;
    this.props.addEmployee({ id, name, position });
    this.setState({ id: '', name: '', position: '' });
  };

  render() {
    const { id, name, position } = this.state;
    return (
        <div className="add-employees-container">
            <form onSubmit={this.handleSubmit} className="add-employee-form">
                <label>
                    ID:
                    <input type="text" name="id" value={id} onChange={this.handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <label>
                    Position:
                    <input type="text" name="position" value={position} onChange={this.handleChange} />
                </label>
                <button type="submit">Add Employee</button>
            </form>
        </div>
      
    );
  }
}

export default AddEmployees;
