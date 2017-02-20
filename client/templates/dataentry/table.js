Session.set("idtest",null)

 var count=0
var test=null 
  Template.table.rendered = function () {

  Meteor.subscribe('dataentriesTable');
$("#myBtn").click(function(){
        $("#myModal").modal();
    });


}

Template.table.helpers({
    dataentries: function(){
    	
      console.log("test ")
      //console.log("This is the type of data "+ typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}) )
    // var test=Dataentries.find({},{sort: {timestamp: -1}, limit: 5}) 
     
       //var test =ReactiveMethod.call('dataTable',count)
   //Create session variable for if the final page is reached
 
  
     //console.log("this is the typeof data server test "+ typeof Meteor.call('dataTable'))
     return ReactiveMethod.call('dataTable',Session.get("finalPage"),Session.get("removed"))
   
      //return Dataentries.find({})

    }      
                                                             
})
if (Meteor.isClient) {

Template.registerHelper('idtest',function(input){
  return Session.get("idtest")
});




}
Template.table.events({
   
});


Template.RequestDemoModal.helpers({
requestDemoSchema: function () {
return Schema.RequestDemo;
}
});

