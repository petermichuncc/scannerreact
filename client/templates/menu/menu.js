Template.menunew.events({
  'click .scanner': function(event, template){
  //Barcode scanner
    // Router.go('three');
FlowRouter.go('/')
 return false;
  },
'click .history': function(event, template){
   //scan history
     //Router.go('outputnew');
FlowRouter.go('/outputnew')
 return false;
  },
'click .dataentry': function(event, template){
   //data entry
     //Router.go('first');
FlowRouter.go('/first')
 return false;
  },
  'click .graph': function(event, template){
   //graphs
     //Router.go('graph');
  FlowRouter.go('/graph')
 return false;
  }

});