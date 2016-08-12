import React from 'react';
import _ from 'lodash';
import AddStudent from './addstudent.js';
import StudentList from './studentlist.js';

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Student Picker</h1>
        </div>
        <div className="row">
          <h3>You can use this app to randomly pick a student for torture or to make teams for group projects.</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <StudentList />
          </div>
        </div>
      </div>
    )
  }
})

export default App;
