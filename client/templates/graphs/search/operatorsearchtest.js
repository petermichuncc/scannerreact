StandardLegends = new Mongo.Collection(null);

  Template.opsearchtest.onCreated = function () {


this.subscribe('dataentriesOperators');

}

Template.opsearchtest.rendered = function () {

/*
Here I need an array with all the unique operator names

*/
//create server function for this



}



/*
Meteor.startup(function() {
  Meteor.typeahead.inject();
});*/

Template.opsearchtest.helpers({
 test:function(event,template)
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

console.log("this is the # of dataentries "+ Dataentries.find().count())

var states=ReactiveMethod.call('dataentriesOperators')
/*
var states = _.uniq(Dataentries.find({}, {
    sort: {name: 1},fields: {name: 1}
}).fetch().map(function(x) {
    return x.name;
}), true);
*/
//var states=Dataentries.find({department: { $regex: name }},{sort: {timestamp: -1}, limit: 5, fields: {name: true}});

 
/*var selected =$('.typeahead :selected').text();
console.log("this is the selected "+selected)
*/

var $myTextarea = $('#myTextarea');

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1,

},
{
  name: 'states',
  source: substringMatcher(states)
 
});

$('#button1').click(function(){ 
     var item=$("#name").val()
     $myTextarea.append(item, ' ');
            return $("#name").val('');
  });

 }

});


Template.opsearchtest.events({
      'keyup input': function(event) {
      // console.log('key', event.currentTarget.value);


   Session.set("states",event.currentTarget.value)

   }


 })