import React from 'react';
import _ from 'lodash';

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
    //this.setState({studentName: "Juan Carlos"});
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

export default PickStudent;
