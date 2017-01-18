import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React component
//import {Layout, Welcome} from './app.jsx';
import {Layout} from './app.jsx';
import { Welcome, Task} from '../imports/ui/Task.jsx';
import App from '../imports/ui/App.jsx';
 Meteor.subscribe('tasks');
FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<App/>)
    });
  }
});

/*
FlowRouter.route("/", {
  
  action: function() {
    ReactLayout.render(Layout, {
      content: <Welcome />
    });
  }
});
*/

//content: (<Welcome name="arunoda"/>)