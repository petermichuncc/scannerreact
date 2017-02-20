/*
 Router.configure({
  layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
    // waitOn: function () {
    //     return [Meteor.subscribe('workcenters')];
    // }
    
     fastRender: true
   
 }); 
  


*/
FlowRouter.route('/opsearchnew', {
  action: function() {
    BlazeLayout.render("layout", {content: "opsearchnew"});
  }
});

FlowRouter.route('/opsearchtest', {
  action: function() {
    BlazeLayout.render("layout", {content: "opsearchtest"});
  }
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {content: "three"});
  }
});

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
FlowRouter.route('/datasearch', {
  action: function() {
    BlazeLayout.render("layout", {content: "datasearch"});
  }
});
FlowRouter.route('/first', {
  action: function() {
    BlazeLayout.render("layout", {content: "first"});
  }
});





/*

 
 Router.route('/alltemps', {name: 'alltemps'});
 
Router.route('/final', {name: 'final'});
Router.route('/main', {name: 'main'});
Router.route('/main1', {name: 'main1'});
 Router.route('/test', {name: 'test'});
  Router.route('/intro', {name: 'intro'});
     Router.route('/start', {name: 'start'});
           Router.route('/table', {name: 'table'});
           Router.route('/datasearch', {name: 'datasearch'});
     
       
        

 */