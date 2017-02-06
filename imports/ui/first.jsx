

{/*

<template name="first">
  

 
 
     
     {{#if $.Session.equals 'count' 0}}
   
  
 <button class="btn btn-default 0 z-depth-3 whitetext" id="test" type="submit">Start data entry</button>
 
 

       {{/if}} 
       

</template>


*/}
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Work on this page
// App component - represents the whole app
class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log("text on client " + text)
    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
myClick() {
  //This triggers
       // alert("Hello World!");
    }
    getInitialState() {
       return { showMe : false };
    }
    onClick() {
       this.setState({ showMe : true} );
    }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }
  /*<span>
          <h2>{ `Welcome Back ${ this.props.name }` }</h2>
          <p>You can visit settings to reset your password</p>
        </span>*/
        //Here I need to show an input terminal
  render() {
 let userMessage;
    if (this.state.showMe) {
      userMessage = (
      
         <input type="text" class="form-control" id="usr" />
      )
    } else {
      userMessage = (
       <RaisedButton className="0" id="test" type="submit" label="Start data entry" zDepth={3}  onClick={this.myClick}/>
      )
    }
    return (
      <div>
 { userMessage }



</div>

    );
  }
}

First.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('tasks');
    console.log("trying to export task")
  return {

    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };
}, First);