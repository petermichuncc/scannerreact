StandardLegends = new Mongo.Collection(null);

  Template.workcentersearchtest.created = function () {


Meteor.subscribe('datacenters');


}

Template.workcentersearchtest.rendered = function () {


}
/*
Meteor.startup(function() {
  Meteor.typeahead.inject();
});*/

Template.workcentersearchtest.helpers({
  nba: function() {
  //  console.log("inside nba")
   
   /* return Dataentries.find().fetch().map(function(it){
    //console.log("this is it inside "+ it)
     return it.name; });*/

    // var data =Dataentries.find().fetch().map(function(it){
    //console.log("this is it inside "+ it)
    // return it.name; });

    //return data



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



    },
    test: function()
    {
      var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};
/*
Here I need an array with all the unique operator names

*/
console.log("about to find workcenters")
 console.log("this is a datacenter in rendered"+ Datacenters.find({}).fetch().pop())
var distinctEntries = Datacenters.find({}, {
    sort: {workcenter: 1}, fields: {workcenter: true}
}).fetch().map(function(x) {
  console.log("workcenter in map function " )
    return x.workcenter;
});
var states=distinctEntries;
Session.set("states",states)
/*
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
*/
//try out a server side function
$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(Session.get("states"))
});


    }
});


