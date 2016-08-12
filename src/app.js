import React from 'react';
import _ from 'lodash';
import AddStudent from './addstudent.js';
import StudentList from './studentlist.js';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Student Picker</h1>
        <h3>You can use this app to randomly pick a student for torture or to make teams for group projects.</h3>
        <StudentList />
      </div>
    )
  }
})

export default App;
