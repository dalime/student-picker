import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AddStudent from './addstudent.js';

const OneStudent = React.createClass({
  render() {
    return (
      <h5></h5>
    )
  }
})

const CurrentList = React.createClass({
  render() {
    let students = this.props.students.map(student => {
      <OneStudent />
    });
    return (
      <div className="container">
        {students}
      </div>
    )
  }
})

const StudentList = React.createClass({
  getInitialState() {
    try {
      var students = JSON.parse(localStorage.students);
    } catch(err) {
      var students = [];
    }
    return {students};
  },
  componentDidUpdate() {
    localStorage.students = JSON.stringify(this.state.students);
  },
  test() {
    console.log("hello");
  },
  addStudent() {
    let newStudent = AddStudent.props.addStudent;
    console.log(newStudent);
    /*this.setState({
      students: this.state.students.concat(newStudent)
    })*/
  },
  deleteStudent(studentId) {
    let deleteArr = this.state.students.filter(student => {
      return student.id != studentId;
    });
    this.setState({students: deleteArr});
  },
  updateStudent(studentId, newText) {
    let updateStudents = this.state.students;
    let updateStudent = {
      text: newText,
      id: studentId
    };
    for (let i = 0; i < updateStudents.length; i++) {
      if (updateStudents[i] === studentId) {
        updateStudents[i] = updateStudent;
      }
    }
    this.setState({students: updateStudents});
  },
  render() {
    return (
      <div>
        <h2>Student List</h2>
        <CurrentList students={this.state.students} delete={this.deleteStudent} update={this.updateStudent}/>
        <AddStudent testBtn={this.test}/>
      </div>
    )
  }
})

export default StudentList;
