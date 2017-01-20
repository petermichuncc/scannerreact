  
  Session.set("nameoutput", null)
     var start= moment().format("2000-01-01")
 Session.set("startoutput", start);
  var end= moment().format("2100-01-01")
    Session.set("endoutput", end);
     Session.set("namenew", 0)
   Session.set("startnew", 0)
    Session.set("endnew", 0)
  Template.outputnew.rendered = function () {


Meteor.subscribe('scans');

}


Template.outputnew.helpers({
    scans: function(){
     
      //console.log("count dataentries "+ Dataentries.find().count())
     //create a meteor method that returns Dataentries.find() 
     

     //Basically I'll have a session variable that holds the persons name
     //
     //Session.set("name", "Yolanda McDougald" )
      var start=moment().format("YYYY-MM-DD 05:00:00.000")
    var name="yolanda"
    var start=Session.get("startoutput")
    start=moment(start).format("YYYY-MM-DD")
    var end=Session.get("endoutput")
    end=moment(end).format("YYYY-MM-DD")
    console.log("this is the start "+ start+ " this is the end " + end)
    var name=Session.get("nameoutput")
   

    if (name==null)
    {
console.log("the session is null ")

  if (Scans.find({timestamp: {$gte: start, $lt:end}}).count()>0)
  {
    //test out returning a toast
    return Scans.find({timestamp: {$gte: start, $lt:end}})
  }

    }
else
{

  if (Scans.find({ partnumber: {$regex: name, $options: 'i'},timestamp: {$gte: start, $lt:end} }).count()>0)
      {

      //test out returning a toast
      return Scans.find({ partnumber: {$regex: name, $options: 'i'},timestamp: {$gte: start, $lt:end} })
    }

    }      
},
settings: function () {
        return {
           // collection: scans,
            rowsPerPage: 7,
            showFilter: true,
            fields: ['timestamp', 'initials', 'partnumber','mismatches','kanbanoverride','bagoverride','boxoverride']
        };
    }
                                                             
})
Template.outputnew.events({
    
 'input #name': function (event, template) {
  console.log("This is the entered name " + event.currentTarget.value)
  if (event.currentTarget.value.length>0)
  {
      //At this point the user is inputting data into the part number text box
      //So I need to focus on it
      //

    
    Session.set("nameoutput", event.currentTarget.value);
  }
 /*
When all 3 of the input boxes are filled then set a session variable to true


 */
  },
  'input #start': function (event, template) {
  console.log("This is the entered name " + event.currentTarget.value)
  var start =event.currentTarget.value
   var length=event.currentTarget.value.length
  length=length.toString()
  var start=event.currentTarget.value
   //var start= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")

    var startnew=start.replace(/[^0-9]/g, '');
        length=startnew.length
      length=Number(length)
   
    if (length>6)
   {

  Session.set("startoutput", start);
 
  }
    //var start= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
   
    
 
  
  },
  'input #end': function (event, template) {
   
  console.log("This is the entered name " + event.currentTarget.value)
       var length=event.currentTarget.value.length
  length=length.toString()
        var end=event.currentTarget.value
   
    var endnew=end.replace(/[^0-9]/g, '');
        length=endnew.length
      length=Number(length)
     
      if (length>6)
   {
       Session.set("endoutput", end);
  
  }



 
   // var end= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
 
  
 
  },
  'click .2': function(event, template){
   //scan history
    FlowRouter.go('/menu')

 return false;
  },

});