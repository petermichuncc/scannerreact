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
/* Work on making this app a single page application */
/*
Test out different ways to show a specific component based on a session variable or click event


*/
/*
import {Router, Route} from 'react-router';

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

render(
    <Router>
       
        <Route path="/test2" component={Home}/>
    </Router>,
    document.getElementById('container')
);

*/

FlowRouter.route("/test/", {
//test/:postId

  action(params, queryParams) {
      var test= <First/>
//so here I can set test to a certain component based on input into flow router
//console.log("Yeah! We are on the post:", params.postId);
    mount(
      //Here is the main layout to route through


      dataLayout, {
      /*maybe this is a return render 
      whatever the content is it is routed through the 
      flow router through react mount to the appropriate location

      */

        content: ( <First/>)
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