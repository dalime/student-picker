import React from 'react';
import _ from 'lodash';

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
      let ul = <ul key={index}>
        <h5>Team {index + 1} </h5>
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
        <input id="iptTeam" type="number" onChange={this.onInputChange} min="2" placeholder="2"/>
        <button onClick={this.pickTeam}>Pick Team</button>
        <TeamList teamNames={this.state.teams}/>
      </div>
    )
  }
})

export default PickTeam;
