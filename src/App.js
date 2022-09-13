import React from 'react';
import './App.css';
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from './component/redux/Action.js';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      employeeName: '',
      employeeAddress: '',
      departmentName: ''
    }
  }

  static propsTypes = {
    employees: PropsTypes.array.isRequired,
    getEmployee: PropsTypes.func.isRequired,
    addEmployee: PropsTypes.func.isRequired,
    editEmployee: PropsTypes.func.isRequired,
    deleteEmployee: PropsTypes.func.isRequired
  };


  componentDidMount() {
    this.props.getEmployee();
  }

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value
    });
  }

  handleAddressChange = (e) => {
    this.setState({
      employeeAddress: e.target.value
    });
  }

  handleDepartmentChange = (e) => {
    this.setState({
      departmentName: e.target.value
    });
  }

  submitData = () => {
    debugger;
    if (this.state.employeeName && this.state.employeeAddress && this.state.departmentName, !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (99 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeAddress: this.state.employeeAddress,
        departmentName: this.state.departmentName
      };
      this.props.addEmployee(newEmployee);
    }
    else if (this.state.employeeName && this.state.employeeAddress && this.state.departmentName && this.state.id) {
      const updatEmployee = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeAddress: this.state.employeeAddress,
        departmentName: this.state.departmentName
      };
      this.props.editEmployee(updatEmployee);
    }
    else {
      alert('Enter Employee Data')
    }

    this.clearData();
  }

  editDetails = (data) => {
    debugger;
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeAddress: data.employeeAddress,
      departmentName: data.departmentName
    })
  }

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  }



  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeAddress: "",
      departmentName: ""
    });
  }

  render() {
    return (
      <div className="App">
        <header style={{ "height": "80px", "backgroundColor": "black" }}>
          <h1 style={{ "color": "white" }} >
            Employee Crud Opration using React-Redux
                    </h1>
        </header>
        <br />
        <div className="App-intro">

          <div>
            Employee Name : <input type="text" onChange={this.handleNameChange} value={this.state.employeeName} placeholder="EmployeeName" /> <br />
            <br />
                        Employee Address: <input type="text" onChange={this.handleAddressChange} value={this.state.employeeAddress} placeholder="EmployeeAddress" /><br />
            <br />
                        Department Name : <input type="text" onChange={this.handleDepartmentChange} value={this.state.departmentName} placeholder="DepartmentName" /><br />
            <br />
            {this.state.id ? <button onClick={this.submitData} >Update</button> : <button onClick={this.submitData}>Add</button>}
            <button onClick={this.clearData}> Clear</button>
          </div>

          <div >
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee Name</th>
                  <th>Employee Address</th>
                  <th>Department Name</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees && this.props.employees.map((item, index) => {
                  return <tr key={(index + 1)}>
                    <td>{(index + 1)}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.employeeAddress}</td>
                    <td>{item.departmentName}</td>
                    <td><button onClick={() => this.editDetails(item)}>Edit</button>
                      <button onClick={() => this.deleteEmployee(item.id)}>Delete</button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees
});


export default connect(mapStateToProps, { getEmployee, addEmployee, editEmployee, deleteEmployee })(App);
