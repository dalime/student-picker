import React from 'react';

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

export default EditForm;
