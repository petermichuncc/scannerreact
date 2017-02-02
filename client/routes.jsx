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
let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
  return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};
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

/*
//Working solution
FlowRouter.route("/test/", {
//test/:postId

  action(params, queryParams) {
      var test= <First/>
//so here I can set test to a certain component based on input into flow router
//console.log("Yeah! We are on the post:", params.postId);
    mount(
      //Here is the main layout to route through


      dataLayout, {
     

        content: ( <First/>)
    });
  }
});

*/


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
WelcomeComponent = React.createClass({
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
    </div>
  }
});

MainLayout = React.createClass({
  render() {
    return <div>
      <header>
        This is our header
      </header>
      <main>
        {this.props.content}
      </main>
      <footer>
        This is our footer
      </footer>
    </div>
  }
});

FlowRouter.route("/test", {
    action(params, queryParams) {
     mount(dataLayout, {
  content: <First/>
})
  }
});


AnotherComponent = React.createClass({
  render() {
    return (
      <a href={FlowHelpers.pathFor( 'cookies/:cookie', { cookie: 'peanut-butter' } )}>To the peanut butter!</a>
    );
  }
});
Cookies = React.createClass({
  render() {
    return (
      <div className="cookie">
  <a href={FlowHelpers.pathFor( 'cookies/:cookie', { cookie: 'peanut-butter' } )}>To the peanut butter!</a>
      <h3>I'd like to eat a <span style={{color: 'orange'}}>{this.props.cookie}</span> cookie.</h3>
     
      </div>

    );
  }
});
FlowRouter.route( '/cookies/:cookie', {
  name: 'cookies',
  action( params ) {
    mount(dataLayout, {
 content:<Cookies cookie={params.cookie} />
})
   
  }
});

FlowRouter.route( '/cookies', {
  name: 'cookies',
  action() {
   mount(dataLayout, {
 content:<Cookies />
})
  }
});

FlowRouter.route( '/cookies', {
  name: 'cookies',
  action() {
    mount(dataLayout, {
 content: <Cookies/>
})
    
  }
});

