//File that publishes all the databases used
import '../imports/api/tasks.js';

//ReactiveTable.publish("scans", Scans);




/*
Meteor.publish('dataentriesOperators', function() {
return Dataentries.find({}, {fields: {name: 1}});


});
*/
/*
Meteor.publish('dataentriesnames', function(start,end) {
  return Dataentries.find({timestamp: {$gte: start, $lt:end}}, {
    sort: {name: 1}, fields: {name: true}
});
  });
  */
/*
Meteor.publish('dataentriesTable', function() {
  return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})
});


*/
Meteor.publish('datacenters', function() {
  console.log("Here is a datacenter " + Datacenters.find())
  return Datacenters.find();
});

