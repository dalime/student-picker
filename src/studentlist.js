import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AddStudent from './addstudent.js';
import PickStudent from './pickstudent.js';
import PickTeam from './pickteam.js';
import EditForm from './editform.js';
import CurrentList from './currentlist.js';

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
      if (updateStudents[i].id === studentId) {
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
        <PickStudent currStudents={this.state.students}/>
        <PickTeam currStudents={this.state.students} />
      </div>
    )
  }
})

export default StudentList;
