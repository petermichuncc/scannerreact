{/*
Start working on this and making this have functional if statements that 
grab user input based on the state of the app

*/}

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
import TextField from 'material-ui/TextField';
//Work on this page
// App component - represents the whole app
 //$("link[href='materialize.css']").disabled = true;
 // $("link[href='_materialize.scss']").disabled = true;
class First extends Component {
   


  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
   
    this.state = {
       name: '',
      isLoggedIn: 0,
               textFieldValue:""};

    //this.state = {value: ''};
  }
 
  getInitialState() {
        return {
            textFieldValue: ''
        };
    }
  handleChange(name, value){
    console.log("this is the value "+ value)
    let state = this.state;
    state[name] = value;
    this.setState({state});

  }

  handleLoginClick() {
    //Here I can change the state based on a click
    if (this.state.isLoggedIn==0)
      {
    this.setState({isLoggedIn: 1});
      }
    else if (this.state.isLoggedIn==1)
      {
        this.setState({isLoggedIn: 2});
      }
  }
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log("text on client " + text)
   

   // Meteor.call('tasks.insert', text);

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
      console.log("Here is data from text " + event.target.value)
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



 
 render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    let button = null;


   
      button = <LoginButton onClick={this.handleLoginClick} />;
 
    return (
      <div>
      <TextField
      onChange={this.handleChange.bind(this, 'name')}
      hintText="Hint Text"
      floatingLabelText="Please enter the employee's name"
      
    />
        <UserGreeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }

  







 
}
//These functions are components used by the program
function UserGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  //This function is choosing a component to show
  if (isLoggedIn==0) {
  return (
    <div>

              

<br />
</div>

    )

}

}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  //This function is choosing a component to show
  if (isLoggedIn==0) {
    return <UserGreeting />;
  }
  else if (isLoggedIn==1)
  {
  return <GuestGreeting />;
}
}

function LoginButton(props) {
  return (
    <RaisedButton label="Next" primary={true} onClick={props.onClick} />
    
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


  //return  <RaisedButton label="Primary" primary={true} onClick={props.onClick} />
   
  


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