{/*
Start working on this and making this have functional if statements that 
grab user input based on the state of the app

*/}
{/*
Finish this page and get it functioning well

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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
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
               textFieldValue:"",
               value:"datacom",
                controlledDate:0
             };

               console.log("type of this.state "+ typeof this.state)

    //this.state = {value: ''};
  }
 
  getInitialState() {
        return {
            textFieldValue: ''
        };
    }
  handleChange(name, e){
   console.log("this is typeof "+ typeof e.target.value)
    console.log("this is the value "+ e.target.value)
   console.log("this is the name "+name)
    
    let state = this.state;
    state[name] = e.target.value;
    this.setState({state});

  }
  handleChangeDate(name,event, date)
  {
    console.log("this is the date "+date)
    console.log("this is the event "+ event)
    console.log("this is the name "+ name)
var name="controlledDate";
        let state = this.state;
    state[name] = date;
    this.setState({state});


  };

  handleChangeNew(name, event, index,value) 
  { 
    console.log("trying handlechange ")
    console.log("this is the index "+index)
    console.log("this is the event name"+ name)
     console.log("this is the event value "+ value)
    console.log("this is the event index"+ index)
    //console.log("this is the event name" + event.target.name)

    var name=name;
        let state = this.state;
    state[name] = value;
    this.setState({state});

    //this.setState({value});

}
  handleLoginClick() {
    //Here I can change the state based on a click
    console.log("this is the state "+ this.state.isLoggedIn)
    if (this.state.isLoggedIn>=2)
      {
        this.setState({isLoggedIn: 0});
      }
    else if (this.state.isLoggedIn>=0 &&this.state.isLoggedIn<2)
      {
        var current=this.state.isLoggedIn +1;
    this.setState({isLoggedIn: current});
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
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }



 
 render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    let button = null;
    let button2 = null;

   
      button = <LoginButton onClick={this.handleLoginClick} />;
      button2 = <LogoutButton onClick={this.handleLoginClick} />;
      var test=<TextField
      name='name' value={this.state.textFieldValue}
      onChange={this.handleChange.bind(this, 'textFieldValue')}
      hintText="Hint Text"
      floatingLabelText="Please enter the employee's name"
      
    />
     if (isLoggedIn==0) {
    return (
      <div>
       <DatePicker
        hintText="Date"
        value={this.state.controlledDate}
        onChange={this.handleChangeDate.bind(this,'controlledDate')}
      />
        <br/>
           {this.renderTasks()}
        {button}
      </div>
    );
  }
  if (isLoggedIn==1) {
    return (
      <div>
       <SelectField
          name='test'
          floatingLabelText="Department"
          value={this.state.value}
          onChange={this.handleChangeNew.bind(this,'value')}
        >
          
           <MenuItem  value={"datacom"} primaryText="Datacom" />
       <MenuItem  value={"packing"} primaryText="Packing" />
       <MenuItem  value={"manual"} primaryText="Manual" />
       <MenuItem  value={"scd"} primaryText="SCD" />
       <MenuItem  value={"manualboxes"} primaryText="Manual Boxes" />
       <MenuItem  value={"metals"} primaryText="Metals" />
       <MenuItem  value={"raceway"} primaryText="Raceway" />
       <MenuItem  value={"wiu"} primaryText="WIU" />
       <MenuItem  value={"autoboxes"} primaryText="Auto boxes" />
       <MenuItem  value={"husky"} primaryText="Husky" />
        </SelectField>
        <br/>
        {button}
      </div>
    );
  }
  else if (isLoggedIn==2) {
    return (
      <div>
       
       <SelectField
          name='test'
          floatingLabelText="Employees status"
          value={this.state.value? this.state.value: null}
          onChange={this.handleChangeNew.bind(this,'value')}
        >
          
           <MenuItem  value={"temp"} primaryText="Temp" />
       <MenuItem  value={"permanent"} primaryText="Permanent" />
      
        </SelectField>
        <br/>
      
        {button}
      </div>
    );
  }

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
     <RaisedButton label="Previous" primary={true} onClick={props.onClick} />
  );
}


  //return  <RaisedButton label="Primary" primary={true} onClick={props.onClick} />
   
  


First.propTypes = {
  tasks: PropTypes.array.isRequired
  
};

export default createContainer(() => {
  Meteor.subscribe('tasks');
    console.log("trying to export task")
  return {

    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  
  };
}, First);