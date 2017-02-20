 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$('#date').focus();
  Session.set("name", null)
  Session.set("date", null)
  Session.set("status", null)
  Session.set("department", null)
  Session.set("workcenter", null)
  Session.set("shift", null)
  Session.set("planned", null)
  Session.set("actual", null)
  Session.set("productivity", null)
  Session.set("dailydatacount", null)
  Session.set("weeklydatacount", null)

function myFunction() {
    var x = Math.floor((Math.random() * 21) + 1);

if (x==1)
{
 return 'Nice work';
}
else if (x==2)
{
   return 'Good job';
}
else if (x==3)
{
  return'Congratz';
}
else if (x==4)
{
  return 'Fantastic';
}
else if (x==5)
{
  return 'Keep it up';
}
else if (x==6)
{
  return 'Good going';
}
else if (x==7)
{
  return 'Good work';
}
else if (x==8)
{
  return 'Bravo';
}
else if (x==9)
{
  return 'Compliments';
}
else if (x==10)
{
  return 'Well done';
}
else if (x==11)
{
  return 'Perfect';
}
else if (x==12)
{
  return 'Marvelous';
}
else if (x==13)
{
  return 'Excellent';
}
else if (x==14)
{
  return 'Right on';
}
else if (x==15)
{
  return 'Nice going';
}
else if (x==16)
{
  return 'Kudos to you';
}
else if (x==17)
{
  return 'Good effort';
}
else if (x==18)
{
  return "That's the way";
}
else if (x==19)
{
  return "Way to go";
}
else if (x==20)
{
  return "Nice one";
}
else if (x==21)
{
  return "Good stuff";
}

}

function myFunctionColor() {
    var x = Math.floor((Math.random() * 7) + 1);

if (x==1)
{
 return 'green'
}
else if (x==2)
{
   return 'blue'
}
else if (x==3)
{
  return'green accent-3'
}
else if (x==4)
{
  return 'cyan accent-2'
}
else if (x==5)
{
  return 'deep-purple darken-4'
}
else if (x==6)
{
  return 'deep-purple accent-3'
}
else if (x==7)
{
  return 'lime accent-1'
}
}







var showdd=null
var showtext=null
var count=0;
Session.set("finalPage",false)
Session.set("count",0)
Session.set("textgo",false)
Session.set("name", null)
var name=null
var date=null
var planned=null
var actual=null
var ss=null
var shift=null
var status=null
var department=null
var workcenter=null
if (Meteor.isClient) {

Template.registerHelper('showtext',function(input){
 return Session.get("showtext");
});

Template.registerHelper('showdd',function(input){
  return Session.get("showdd");
});

}

    Template.first.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/
if (Session.get("removed")==true)
      {
        Session.set("removed",false)
      }
 Meteor.subscribe('datacenters');
//Meteor.subscribe('dataentries');
$(document).keypress(function(event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('#test').click();   
    }

});








this.$('.datetimepicker').datetimepicker();

$("#initials").focus();

 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });



}
 
//var nowsync=TimeSync.serverTime(null, 300000);
Template.first.helpers({
    text: function () {

      //In this function I will return the text asking for the user to enter specific data
      console.log("this is the session count in text " + Session.get("count"))
      if (Session.get("count")===1)
      {
        return "Please enter employee name: "
      }
      /*
        add a new string to return
      */
      else if (Session.get("count")===2)
      {
         $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$('#date').focus();
        return "Please select a date: "
      }
      else if (Session.get("count")===3)
      {
        return "Please select employee status: " 
      }
       else if (Session.get("count")===4)
      {
        return "Please select the department: "
        
      }
      else if (Session.get("count")===5)
      { return "Please select the workcenter: "
       
      }
     else if (Session.get("count")===6)
      {
       
      return "Please select the shift: "
      }
      else if (Session.get("count")===7)
      {
        return "Please enter the planned (units): "
      }
      else if (Session.get("count")===8)
      {
        return "Please enter the actual (units): "
        
      }
      
  },
  show: function(){

// I will create a boolean that will show true if the count is 2 or 3
if (Session.get("count")>=1 && Session.get("count")<9)
{
  
  Session.set("showtext",true)
}
else
{
  
  Session.set("showtext", false)
}




if (Session.get("count")>=3 && Session.get("count")<7)
{

  Session.set("showdd",true)
}
else
{
 
  Session.set("showdd",false)
}






  },
  workcenters: function()
  {
    //I will grab a session variable that has the 
    var department =Session.get("department")
    console.log("this is the department "+ department)


    return Datacenters.find({department:department})
  },
 datacount: function()
  {
    //I will grab a session variable that has the 
    var datacount=ReactiveMethod.call('dailydatacount')
    Session.set("dailydatacount",datacount)
    var datacount=ReactiveMethod.call('weeklydatacount')
    Session.set("weeklydatacount",datacount)
   console.log("this is the data count now "+ datacount)
  }
});




 Template.first.events({
    // events go here
 'click .userRow':function(e, t){
      /*  BootstrapModalPrompt.prompt({
      dialogTemplate: Template.RequestDemoModal
    });*/

var name=this.name
var date=this.date
var employeestatus=this.employeestatus
var department=this.department
var workcenter=this.workcenter
var shift=this.shift
var planned=this.planned
var actual=this.actual
var productivity=this.productivity
var id=this._id
console.log("You Select Client Row " + name);
     console.log("You Select Client Row " + date);
 console.log("You Select Client Row " + employeestatus);
 console.log("You Select Client Row " + department);
console.log("You Select Client Row " + workcenter);
console.log("You Select Client Row " + shift);
console.log("You Select Client Row " + planned);
console.log("You Select Client Row " + actual);
console.log("You Select Client Row " + productivity);
console.log("You Select Client Row " + id);
Session.set("idtest",id)
//trigger a removal of this database entry when it is clicked



Meteor.call('alertremoval', name,date,productivity,id)


  Session.set("removed",true)
 

   





//
        
      
    },
    
"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 

console.log("this is the count "+count)

return false;
},
'click .0': function(event, template){
 //Router.go('one')
//I need to store the user submitted date into a session variable

 count=count+1;
Session.set("count",count)

},
'click .1': function(event, template){
 //Router.go('one')
//I need to store the user submitted date into a session variable
if (Session.get("removed")==true)
      {
        Session.set("removed",false)
      }


var value=''
if (count===1)
{
  name=$( "#name" ).val()
  value=$( "#name" ).val()
  console.log("THis is the input in if statement" +$( "#name" ).val())
  Session.set("name",name)
  $('#name').val('');
  $("#name").focus();
}
else if (count===2)
{
  date=$( "#date" ).val()
  
  value=$( "#date" ).val()
  date=moment(date).format("YYYY-MM-DD")
  Session.set("date", date)
  $('#date').val('');
  $("#date").focus();
  $("#name").focus();
}
else if (count===7)
{

  planned=$( "#name" ).val()
  Session.set("planned", planned)
   value=$( "#name" ).val()
  $('#name').val('');
  $("#name").focus();
}
else if (count===8)
{
  actual=$( "#name" ).val()
  Session.set("actual", actual)
  value=$( "#name" ).val()
  $('#name').val('');
  $("#name").focus();
}


 if(value == ''){
     
var color=myFunctionColor()

Materialize.toast("Input can't be left empty", 4000, color)
   }
   else
   {
    count=count+1;
   }
 
Session.set("count",count)
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}
console.log("this is the count " + count + "This is the session " + Session.get("count"))
//setup if statements that set session variables based on
//the current count 
 if (count===9)
 {
  console.log("name date planned actual status shift department workcenter " +name+ " "+ date+" "+ planned+" "+ actual+" "+ status+" "+ shift+" "+  department +" "+ workcenter )
//Here I will insert the data into dataentries
var productivity=Number(actual)/Number(planned)
var productivity=productivity * Number(100)
var productivity=productivity.toFixed(2);
console.log("this is the productivity to fixed 2 " + productivity )
productivity=Number(productivity)
console.log("this is the productivity converted to number" + productivity )
Session.set("productivity", productivity)
Meteor.call('datasInsert',name,date,status,department,workcenter,shift,planned,actual,productivity )
Session.set("finalPage",true)
var word=myFunction()
var color=myFunctionColor()
console.log("this is myFunction "+ word)
Materialize.toast(word, 4000, color)

 
 
 }

console.log("this is the date "+ date)
console.log("this is the planned"+ planned)

},
'click .2': function(event, template){
 //Router.go('one')
console.log("this is the count in click 2 " + count)
var value=''
if (count===3)
{
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()

  status=$( "#s1" ).val()
  Session.set("status", status)
 }
if (count===4)
{
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
  console.log("this is the department in select box " + value)
Session.set("department", test)
console.log("this is the department session "+ Session.get("department"))
  department=$( "#s1" ).val()
  
 }
else if (count===5)
{
    workcenter=$( "#s1" ).val()
    Session.set("workcenter",workcenter)
    value=$( "#s1" ).val()
 }
 else if (count===6)
{
shift=$( "#s1" ).val()
  Session.set("shift", shift)
  value=$( "#s1" ).val()
 }




  if(value == ''){
     
var color=myFunctionColor()

Materialize.toast("Input can't be left empty", 4000, color)
   }
   else
   {
    count=count+1;
   }
 
 Session.set("count",count)
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}



},
'click .daily': function(event, template){
 //Router.go('one')
 var color=myFunctionColor()
 //Say how many entries have been outputted here.
 var datacount=  Session.get("dailydatacount")
 console.log("this is the datacount  in finished" + datacount)
 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 15000, color)

 if (typeof datacount=="number")
 {

}
},
'click .weekly': function(event, template){
 //Router.go('one')
 var color=myFunctionColor()
 //Say how many entries have been outputted here.
 var datacount=  Session.get("weeklydatacount")
 console.log("this is the datacount  in finished" + datacount)
 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries this week")
 Materialize.toast(amount, 15000, color)

 if (typeof datacount=="number")
 {

}
},
'click .start': function(event, template){
 //Router.go('one')
 //Show how many entries for 25 50 100 150 200 300  
/*
 var color=myFunctionColor()
 //Say how many entries have been outputted here.
 var datacount=  Session.get("dailydatacount")
 console.log("this is the datacount  in finished" + datacount)
 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 8000, color)


*/
 var datacount=  Session.get("dailydatacount")
if (datacount==25)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.
//

 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 20000, color)
 Materialize.toast('Great start', 20000, color)
}
else if (datacount==50)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 20000, color)
 Materialize.toast('Keep it up', 20000, color)
}
else if (datacount==100)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 24000, color)
 Materialize.toast('Nice', 24000, color)
}
else if (datacount==200)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 24000, color)
 Materialize.toast('Fantastic', 24000, color)
}
else if (datacount==300)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 24000, color)
 Materialize.toast('Excellent job', 24000, color)
}
else if (datacount==400)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 24000, color)
 Materialize.toast('Wonderful', 24000, color)
}
else if (datacount==500)
{
  var color=myFunctionColor()
 //Say how many entries have been outputted here.


 var datacount=datacount.toString()
var amount="You entered ".concat(datacount)
var amount=amount.concat(" entries today")
 Materialize.toast(amount, 35000, color)
 Materialize.toast('Amazing work', 35000, color)
}

Session.set("name", null)
  Session.set("date", null)
  Session.set("status", null)
  Session.set("department", null)
  Session.set("workcenter", null)
  Session.set("shift", null)
  Session.set("planned", null)
  Session.set("actual", null)
  Session.set("productivity", null)
  Session.set("finalPage",false)
 count=1
Session.set("count",count)

},
'click .5': function(event, template){
 //Router.go('one')
if (count>=2)
{
  count=count-1;
  Session.set("count",count)
}
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}


},
'click .10': function(event, template){
 //Router.go('history')
FlowRouter.go('/history')

},
'click .11': function(event, template){
 //Router.go('datasearch')
 FlowRouter.go('/datasearch')

}
})
