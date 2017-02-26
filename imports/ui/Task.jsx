const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

import React, { Component, PropTypes } from 'react';
 import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item
/*export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);*/
//removed export default class

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
 
Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};

//export const Task;