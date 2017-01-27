import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React component
//import {Layout, Welcome} from './app.jsx';
import {Layout} from './app.jsx';
import {dataLayout} from './app.jsx';
import { Welcome, Task} from '../imports/ui/Task.jsx';
import App from '../imports/ui/App.jsx';
import First from '../imports/ui/first.jsx';
 Meteor.subscribe('tasks');

/*
This will route all content through here
*/
/*
FlowRouter.route("/test", {
  action() {
    mount(dataLayout, {
        content: (<App/>)
    });
  }
});*/
/*
Convert the first template into a react app if possible

*/

/*
FlowRouter.route("/test", {
  action() {
    mount(dataLayout, {
        content: (<First/>)
    });
  }
});*/

FlowRouter.route("/test", {
  action() {
    mount(dataLayout, {
        content: (<First/>)
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