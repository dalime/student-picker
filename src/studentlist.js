import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AddStudent from './addstudent.js';

const TeamList = React.createClass({
  render() {
    let teamNames = this.props.teamNames;
    return (
      <div>
        {teamNames}
      </div>
    )
  }
})

const PickTeam = React.createClass({
  getInitialState() {
    return {
      teamsize: 1,
      teams: []
    }
  },
  pickTeam(event) {
    this.setState({teamsize: document.getElementById('iptTeam').value});
    let studentList = this.props.currStudents;
    let teamNames = _.chunk(_.shuffle(studentList), this.state.teamsize);
    let teams = teamNames.map((team, index) => {
      let ul = <ul key={index + 1}>
        <h3>Team {index + 1} </h3>
        {
          team.map(student => {
            return <li key={student.id}>{student.text}</li>
          })
        }
      </ul>
      return ul;
    });
    this.setState({teams: teams});
  },
  render() {
    return (
      <div>
        <input id="iptTeam" type="number" onChange={this.onInputChange}/>
        <button onClick={this.pickTeam}>Pick Team</button>
        <TeamList teamNames={this.state.teams}/>
      </div>
    )
  }
})

const PickStudent = React.createClass({
  getInitialState() {
    return {
      studentName: ""
    }
  },
  pickStudent() {
    let randomStudents = _.shuffle(this.props.currStudents);
    let randomStudent = randomStudents[0].text;
    this.setState({studentName: randomStudent});
  },
  render() {
    return (
      <div>
        <button onClick={this.pickStudent}>Pick Student</button>
        <label>{this.state.studentName}</label>
      </div>
    )
  }
})

const EditForm = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },
  onInputChange(event) {
    this.setState({text: event.target.value});
  },
  confirmChange() {
    this.props.updateStudent(this.props.studentId, this.state.text);
    this.props.formVisible();
  },
  render() {
    return (
      <div hidden={this.props.hidden}>
        <input type="text" value={this.state.text} onChange={this.onInputChange}/>
        <button onClick={this.confirmChange}>Confirm</button>
      </div>
    )
  }
})

const OneStudent = React.createClass({
  getInitialState() {
    return {
      visible: "hidden"
    }
  },
  deleteStudent() {
    let deleteId = this.props.studentId;
    this.props.deleteStudent(deleteId);
  },
  setFormHidden() {
    this.setState({visible: "hidden"});
  },
  updateButtonClick() {
    this.setState({visible: ""});
  },
  render() {
    return (
      <li>
        {this.props.studentText}
        <EditForm hidden={this.state.visible} formVisible={this.setFormHidden} updateStudent={this.props.updateStudent} studentId={this.props.studentId} studentText={this.props.studentText}/>
        <button className="btn btn-default" onClick={this.deleteStudent}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={this.updateButtonClick}>
          Update
        </button>
      </li>
    )
  }
})

const CurrentList = React.createClass({
  render() {
    let studentList = this.props.currStudents.map(student => {
      return <OneStudent key={student.id} studentId={student.id} studentText={student.text} deleteStudent={this.props.delete} updateStudent={this.props.update}/>
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
