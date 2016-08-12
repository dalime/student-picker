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
      <div className="container">
        <div className="row">
          <button onClick={this.pickStudent}>Pick Student</button>
        </div>
        <div id="victim">
          <div className="row">
            <h3>Victim: </h3>
          </div>
          <div className="row">
            <h1>{this.state.studentName}</h1>
          </div>
        </div>
      </div>
    )
  }
})

export default PickStudent;
