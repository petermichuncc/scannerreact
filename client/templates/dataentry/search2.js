StandardLegends = new Mongo.Collection(null);

   Template.search2.created = function () {
 Meteor.subscribe('datacenters');

}

Template.search2.helpers({
  settings: function() {
    

    return {
      position: "top",
      limit: 12,
      rules: [
        {
          // token: '',
          collection: Datacenters,
          field: 'workcenter',
          matchAll: false,
          template: Template.standardLegends
        }
      ]
    };
  },
  legends: function() {

    //return Datacenters.find();
  },
  test: function()
  {
    
    
  }
});



Template.search2.events({
    
 
  'input #workcenter': function (event, template) {
   
 /* console.log("This is the entered work center " + event.currentTarget.value)
  console.log("this is the work center value " + $( "#workcenter" ).val())
  console.log("this is the wc value javascript "+ document.getElementById('workcenter').value )
  if (event.currentTarget.value.length>0)
  {
    var workcenter=event.currentTarget.value.length 
    Session.set("workcenterName", workcenter);
  }
 */
  },
  'click': function (event, template) {
    console.log("clicked testclick")
   console.log("this is the workcenter " + this.workcenter)
 

  if (this.workcenter>0)
  {
    var workcenter=this.workcenter
    Session.set("workcenterName", workcenter);
  }

  }
 

});