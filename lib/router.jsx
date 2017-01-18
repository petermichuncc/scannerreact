

console.log("This router file is located in " + __dirname);



{/*
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {content: "three"});
  }
});
*/}


FlowRouter.route('/menu', {
  action: function() {
    BlazeLayout.render("layout", {content: "menunew"});
  }
});
FlowRouter.route('/outputnew', {
  action: function() {
    BlazeLayout.render("layout", {content: "outputnew"});
  }
});
//Make this fast render
FlowRouter.route('/graph', {
  action: function() {
    BlazeLayout.render("layout", {content: "graph"});
  }
});
FlowRouter.route('/history', {
  action: function() {
    BlazeLayout.render("layout", {content: "history"});
  }
});
FlowRouter.route('/first', {
  action: function() {
    BlazeLayout.render("layout", {content: "first"});
  }
});






{/*

 
 Router.route('/alltemps', {name: 'alltemps'});
 
Router.route('/final', {name: 'final'});
Router.route('/main', {name: 'main'});
Router.route('/main1', {name: 'main1'});
 Router.route('/test', {name: 'test'});
  Router.route('/intro', {name: 'intro'});
     Router.route('/start', {name: 'start'});
           Router.route('/table', {name: 'table'});
           Router.route('/datasearch', {name: 'datasearch'});
     
       
        

 */}