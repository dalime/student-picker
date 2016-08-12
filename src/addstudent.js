import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';

const AddStudentForm = React.createClass({
  render() {
    return (
      <div>
        <input type="text" value={this.props.newText} onChange={this.props.onInputChange}/>
        <button onClick={this.props.addStudent}>Add Student</button>
      </div>
    )
  }
})

const AddStudent = React.createClass({
  getInitialState() {
    return {
      text: ""
    }
  },
  addStudent() {
    let student = {
      text: this.state.text,
      id: uuid()
    };
    return student;
  },
  onInputChange(event) {
    this.setState({text: event.target.value});
  },
  render() {
    return (
      <div>
        <h2>Add New Student</h2>
        <AddStudentForm newText={this.state.text} onInputChange={this.onInputChange} addStudent={this.addStudent}/>
        <button onClick={this.props.testBtn}>Test</button>
      </div>
    )
  }
})

export default AddStudent;
