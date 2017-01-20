StandardLegends = new Mongo.Collection(null);
Meteor.startup(function(){
    // initializes all typeahead instances
    Meteor.typeahead.inject();
  });

  Template.opsearchtest.rendered = function () {


Meteor.subscribe('dataentries');

}

Template.opsearchtest.helpers({
  nba: function() {
  //  console.log("inside nba")
   
   /* return Dataentries.find().fetch().map(function(it){
    //console.log("this is it inside "+ it)
     return it.name; });*/

     var data =Dataentries.find().fetch().map(function(it){
    //console.log("this is it inside "+ it)
     return it.name; });

    return data



  },
  search: function(query, sync, callback) {
   // console.log("this is query " + query)
     /*
      Meteor.call('search', query, {}, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        callback(res.map(function(v){
          console.log("this is inside server call " + v)

         return {value: v.name}; }));
      });//end of meteor call
      */

 //var data=ReactiveMethod.call('search', query, {}) 
console.log("this is data "+ data)



    }
});


Template.opsearchtest.rendered = function() {
  Meteor.typeahead.inject();
};