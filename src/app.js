import React from 'react';
import _ from 'lodash';
import AddStudent from './addstudentform.js';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Student Picker</h1>
        <h3>You can use this app to randomly pick a student for torture or to make teams for group projects.</h3>
        <AddStudent />
      </div>
    )
  }
})

export default App;
