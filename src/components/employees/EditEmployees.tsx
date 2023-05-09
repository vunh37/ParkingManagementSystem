import React, { Component } from 'react';

interface Props {
  employee: { id: string, name: string, position: string };
  editEmployee: (id: string, name: string, position: string) => void;
}

interface State {
  name: string;
  position: string;
}

class EditEmployee extends Component<Props, State> {
  state = {
    name: this.props.employee.name,
    position: this.props.employee.position
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { employee } = this.props;
    const { name, position } = this.state;
    this.props.editEmployee(employee.id, name, position);
  };

  render() {
    const { name, position } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={position} onChange={this.handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EditEmployee;
