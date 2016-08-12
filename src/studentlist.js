import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AddStudent from './addstudent.js';

const OneStudent = React.createClass({
  deleteStudent() {
    let deleteId = this.props.studentId;
    this.props.deleteStudent(deleteId);
  },
  render() {
    return (
      <li>
        {this.props.studentText}
        <button className="btn btn-default" onClick={this.deleteStudent}>
          Delete
        </button>
      </li>
    )
  }
})

const CurrentList = React.createClass({
  render() {
    let studentList = this.props.currStudents.map(student => {
      return <OneStudent key={student.id} studentId={student.id} studentText={student.text} deleteStudent={this.props.delete}/>
    });
    return (
      <ul>
        {studentList}
      </ul>
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
  addStudent(student) {
    console.log(student);
    this.setState({
      students: this.state.students.concat(student)
    });
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
        <AddStudent testBtn={this.test} add={this.addStudent} />
        <h2>Student List</h2>
        <CurrentList currStudents={this.state.students} delete={this.deleteStudent} update={this.updateStudent} />
      </div>
    )
  }
})

export default StudentList;
