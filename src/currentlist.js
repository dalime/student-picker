import React from 'react';
import EditForm from './editform.js';

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

export default CurrentList;
