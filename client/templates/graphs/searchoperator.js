StandardLegends = new Mongo.Collection(null);
 Template.searchoperator.created = function () {


//Meteor.subscribe('dataentriesnames', Session.get("startgraph"),Session.get("endgraph"));

}

Template.searchoperator.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 3,
      rules: [
        {
          // token: '',
          collection: Dataentries,
          field: 'workcenter',
          matchAll: false,
          template: Template.standardoperator
        }
      ]
    };
  },
  legends: function() {
    //return Dataentries.find({name:Session.get("operator")});
  },
  dataentries: function() {
    /*
    I need to return only unique values

*/
   // console.log("this is the count " +Dataentries.find({name:Session.get("operator")}).count() )
    //return Dataentries.find({name:Session.get("operator")});
    //server side code
    return ReactiveMethod.call('dataentriesWorkcenters',Session.get("operator"))
  
  }
});

