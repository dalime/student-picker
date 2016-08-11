import React from 'react';
import _ from 'lodash';

const AddStudentForm = React.createClass({
  getInitialState() {
    return {
      text: ""
    }
  },
  addStudent() {
    console.log("Add student!");
  },
  onInputChange() {
    this.setState({text: event.target.value});
  },
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onInputChange}/>
        <button onClick={this.addStudent}>Add Student</button>
      </div>
    )
  }
})

const AddStudent = React.createClass({
  render() {
    return (
      <div>
        <h2>Add New Student</h2>
        <AddStudentForm />
      </div>
    )
  }
})

export default AddStudent;
