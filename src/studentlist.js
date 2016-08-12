import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AddStudent from './addstudent.js';
import PickStudent from './pickstudent.js';
import PickTeam from './pickteam.js';
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
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="container">
            <AddStudent testBtn={this.test} add={this.addStudent} />
          </div>
          <div className="container">
            <h2>Student List</h2>
            <CurrentList currStudents={this.state.students} delete={this.deleteStudent} update={this.updateStudent} />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <h2>Pick Student</h2>
          <PickStudent currStudents={this.state.students}/>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <h2>Pick Team</h2>
          <PickTeam currStudents={this.state.students} />
        </div>
      </div>
    )
  }
})

export default StudentList;
