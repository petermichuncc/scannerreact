/*
Test this code out and add a color when the user uses kanban override.


*/
/*
Work on kanban ticket working for multiple partnumbers that could
potentially be scanned.

   
*/
Session.set("section","raceway")
 var color ="indigo lighten-1"
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
    var x = Math.floor((Math.random() * 5) + 1);

if (x==1)
{
 return 'green';
}
else if (x==2)
{
   return 'blue';
}
else if (x==3)
{
  return'green accent-3';
}
else if (x==4)
{
  return 'cyan accent-2';
}
else if (x==5)
{
  return 'deep-purple darken-4';
}

}
//var kanbanPieces=null
var sectionCounter=0;
var password="ekanban"
var count=-3
var colortest=true
var good=null
var goodbag=false
var bag=0
var box=0
var test=0


var run=true
var record=0
var go="green"
var text=""
  Session.set("kanbancount",0)
    Session.set("counter", -3)
    Session.set("start",1)
    Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)
Session.set("contents",null)
Session.set("itemContents",null)
Session.set("testColor",null)
 Session.setPersistent("scannedOrdernumber", null)
//I need to record if a bag, box, and kanban ticket have been scanned
//I need to send this into the 
//Add reactive dictionary variable for the pasted content
if (Meteor.isClient) {
Session.set("section","raceway")
Template.registerHelper('testnew',function(input){
  return  Session.get("counter")
});

Template.registerHelper('kanbancount',function(input){
  return Session.get("kanbancount");
});

Template.registerHelper('kanbanshow',function(input){
  return Template.instance().state.get("kanbanshow")
});

Template.registerHelper('colorshow',function(input){
  return Session.get("colorshow")

});

Template.registerHelper('descshow',function(input){
  return Session.get("descshow")

});

Template.registerHelper('color',function(input){
  return Template.instance().state.get("color")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});



Template.registerHelper('partscan',function(input){
  return Template.instance().state.get("partscan")

});

Template.registerHelper('partscandesc',function(input){
  return Template.instance().state.get("partscandesc")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});
Template.registerHelper('test',function(input){
 
});
Template.registerHelper('bagchecktext',function(input){
 return Session.get("bagchecktext")
});
Template.registerHelper('bagoverride',function(input){
 return Session.get("bagoverride")
});
Template.registerHelper('boxoverride',function(input){
 return Session.get("boxoverride")
});

Template.registerHelper('section',function(input){
 return Session.get("section")
});

}

   Template.three.created = function () {
     



    this.state = new ReactiveDict();
  
   
//initialize or setup all of the time stamps here 
this.state.set('color', null);
this.state.set('colorshow', 0);
this.state.set('counter', -3);
this.state.set('kanban', false);
this.state.set('kanbancheck', false);
this.state.set('barcode', 0);
this.state.set('text', null);
this.state.set('bag', 0);
this.state.set('kanbanshow',false)
this.state.set('kanbangood',false)
this.state.set('colorDescription',null)
this.state.set('good',null)



this.state.set('partscan', null);
this.state.set('partscandesc',null)
this.state.set('partshould',null)
this.state.set('partshoulddesc',null)


Session.set("scannedPartnumber",null)
Session.set("scanned",null)
Session.setPersistent("record", 0)
Session.setPersistent("kanbanoverride", false)
Session.setPersistent("kanbansucceeded",false)
Session.setPersistent("bagoverride", false)
Session.setPersistent("boxoverride", false)
Session.set("kanbancheck", false)

Session.set("kanbantag", 0)
Session.set("bagtag",0)
Session.set("boxtag",0)
 Session.set("kanbanquestion", false)
  Session.set("bagquestion", false)
 
 Session.set("descshow",false)
 Session.set("result", null)
 Session.set("bagchecktext", null)

}  



    Template.three.rendered = function () {
 /*$( ".3" ).click(function() {
  alert( "Handler for .click() called." );
});
  */
/*
$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});
*/



 




}


Template.three.events({
    // events go here
'click .1': function(event, template){
 Router.go('scan')
    

}
})
//var nowsync=TimeSync.serverTime(null, 300000);
Template.three.helpers({
  scan: function()
  {


if (Session.get("counter")>-2 && run===true)
{


$("#initials").focus();
test=null
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;
var $input=$("#initials")
   $input.on('keyup', function () {
runnew=true
    test=(this.value);
 

  


clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);

  });
   $input.on('keydown', function () {
  clearTimeout(typingTimer);

});
     function doneTyping () {
  //do something
  run=true

   



if (test.length==0 &&test=="")
{
  test=Math.floor((Math.random() * 11) + 1);

}

/*
console.log("this is scan2 "+Session.get("scan2") )
console.log("this is scan "+Session.get("scan") )
console.log("this is bagtag "+Session.get("bagtag") )
console.log("this is boxtag "+Session.get("boxtag") )
*/
 /* if (runnew==true)
  {
    //send an alert
    Materialize.toast('Please scan a new barcode', 3000,'blue')
    runnew=false
console.log("please scan a new barcode")
   setTimeout(erase, 1000);
    //clear the input box
  }
  */
  if (runnew==true)
  {
   if (Session.get("counter")<0)
   {
    runnew=false
    Session.set("scan",test)

   }
   else
   {
    runnew=false
    Session.set("scan2",test)
  }
  }
 


  

}
//call function to erase
function erase() {
   $('#initials').val('');
}




}//end of if statement checking the count


  },
  kanbancomponent: function()
  {
    /*
        Here I'm grabbing all the ekanbans associated with this particular order

    */
    Template.instance().state.set("check",false)
    var contents=ReactiveMethod.call('kanbandb', Session.get("scan"))
    



    Session.set("contents",contents)
   
   
   
 

 if (Array.isArray(contents))
 {    
  
 console.log("this is the last item  "+ contents[contents.length - 1])
      var count=contents[contents.length-1]
      
       //Contents is holding all of the kanbans for this order
      console.log("this is the count "+ count)
      for(var i = 0; i < count; i++){
               console.log("Here is the kanban at slot "+i+" "+contents[i])
        }

      console.log("this is the last item  "+ contents[contents.length - 1])

 
Template.instance().state.set("check",true)
  Session.setPersistent("kanbancount", count)

  
  }
var items=ReactiveMethod.call('kanbanItems', Session.get("scan"))
 if (Array.isArray(items))
 {    
console.log("this is items slot 0 "+ items[0])
console.log("this is items slot 0 "+ items[1])
console.log("this is items slot 0 "+ items[2])
    Session.set("itemContents",items)
  }
 
  }, 
   
 
  check: function()
  {

    /*
      This function is checking to see if the job order is correct
      It should only run if the count is -1




    */



   

    var parts=ReactiveMethod.call('order', Session.get("scan"))
   
   

if (Array.isArray(parts)&& run===true && Template.instance().state.get("check")===true )
 {      console.log("test a")    
 $('#initials').val('');
//$( ".alert" ).hide();
     
run=false
  var testColor=myFunctionColor()
  Session.set("testColor",testColor)
     Materialize.toast('That was a correct job order', 8000,'indigo lighten-1 z-depth-2')
     console.log("this test if the alert div is hidden " + $('.alert').not(':visible'))

     count=count+1
   
      Session.set("counter", count)
   Session.setPersistent("scanned",parts[0])
   Session.setPersistent("scannedPartnumber", parts[0])
    Session.setPersistent("scannedDesc", parts[1])

  // scan1=Session.get("scan")

      Session.set("color", "green")
    //return "green"
  }
 else if(Session.get("scan")!=null && run===true&& parts==false&& Template.instance().state.get("check")===false )
  {  
    $('#initials').val('');

      run=false
   
    Materialize.toast('That job order is not in the system', 8000,'orange darken-2 z-depth-2')
     Session.set("color", "red")
     
  }
  else if (Template.instance().state.get("check")===false && run==true )
  { 
   
    //run=false
    $('#initials').val('');
  }

//return go

  },
    part: function () {
    /* if (typeof ReactiveMethod.call('part', Session.get("scan2"))==="string" &&run===true)
 {
    
     
     var scan2=ReactiveMethod.call('part', Session.get("scan2"))
  }
  return scan2
  */

  },
  desc: function()
  {
//call a meteor method that sends the description and takes in a upc from the client
/*if (typeof ReactiveMethod.call('part', Session.get("scan2"))==="string" &&run===true)
 {
     
     
     var scan2=ReactiveMethod.call('desc', Session.get("scan2"))
  }
  return scan2
*/

  },
  
  
  good: function()
   {
    //basically this will return a boolean for whether the background should turn green or not and go to the next page
    //put this comparison on the server side
    //
    /*
      This function is going through and finding out if the scanned printed bag/box label
      or kanban was good or not.  If it was incorrect it lets the user know what the scanned
      item should have been. 

    */
Template.instance().state.set('partscan', null);
  
    Template.instance().state.set('partshould',null)
    Template.instance().state.set('partshoulddesc',null)
 Session.set("kanbantag", false)


   if (typeof ReactiveMethod.call('total', Session.get("scan2"))==="object" &&run===true )
 {
  /*
checks if box label/printed bag was scanned
  */

    if (Session.get("scan2").charAt(0)==7||Session.get("scan2").charAt(0)==8)
    {
      //box label was scanned
      Template.instance().state.set("bag", false)
      Session.set("bagtag",Session.get("scan2"))
    }
    else
    {
      Template.instance().state.set("bag", true)
      Session.set("boxtag",Session.get("scan2"))
    }
    
     var scan2=ReactiveMethod.call('total', Session.get("scan2"))
     var scan2desc=scan2.desc
     scan2=scan2.partnumber
  }
  else if (Array.isArray( ReactiveMethod.call('rawmaterial', Session.get("scan2")))&&run===true &&  Session.get("counter")>=2)
  {
     /*
      checks if kanban was scanned
  */
 
  var contents=ReactiveMethod.call('rawmaterial', Session.get("scan2"))
    Template.instance().state.set("kanban", true)
     //Template.instance().state.set("kanbangood", true)
     var scan2itemid=contents[0]
     var scan2=contents[2]
     var scan2desc=contents[1]
     /*
        Need a description too.
     */
 /*
  scan2 is the item id,
  Session.get("scanned") is the partnumber

 */
 
  }
/*

I will have two different if statements.
One is for the raw material the other for printed bags/box labels 

*/





 
 
//This function is comparing the job order partnumber to the partnumber of the scanned item
// A more efficient thing to do would be to just check if the scanned item
//partnumber is within the job order?
/*
This logic is comparing the partnumber of the job order to that of the printed bag,box label, or kanban

*/

/*
This first if statement runs through if there is a kanban ticket scanned  

*/
if (Template.instance().state.get("kanban")&&run===true && Session.get("counter")>=2)
{
//scan2itemid is the scanned item
     var result=ReactiveMethod.call('compareKanban', scan2itemid,Session.get("scanned"))
     Session.set("result",result)
     

 if(result==="red" && run===true)
      {
       if (Session.get("counter")>=2)
    {
      console.log("setting text false")
      Template.instance().state.set("kanbangood",true)
      Template.instance().state.set("text", false)
  
    }
 Session.set("descshow",true)
  var test3="The part number you scanned was: "
       test3=test3.concat(scan2)
//don't show description if it was ekanban
Materialize.toast(test3, 999000,'blue ch z-depth-2')
        if (typeof scan2desc=="string")
        {
       var test4="Description: "
         test4=test4.concat(scan2desc)
        Materialize.toast(test4, 999000,'blue ch z-depth-2')
        Template.instance().state.set('partscandesc',test4)
      }
     var test2="The partnumber should have been: "
   
    test2=test2.concat(Session.get("scanned"))
     var test5="Description: "
   
    test5=test5.concat(Session.get("scannedDesc"))
 
  Materialize.toast(test2, 999000,'orange ch z-depth-2')
    Materialize.toast(test5, 999000,'orange ch z-depth-2')
//I also need to show a toast with a button that in it
//
var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);
  Materialize.toast1($toastContent, 999000, 'ch');
$('#test1').mouseup(function() { this.blur() })


    Template.instance().state.set('partscan', test3);
    
    Template.instance().state.set('partshould',test2)
    Template.instance().state.set('partshoulddesc',test5)

  
     run=false
   }
   else if(result==="green" && run===true)
   {
    Session.set("descshow",false)
    Materialize.toast('Match', 4000,'indigo lighten-1 z-depth-2')
    //count shouldn't go up after the bag and box are scanned and
    //the scanned item was ekanban
   
    count= Session.get("counter")

    count = count+1
 

   


    
      Session.set("counter", count)
         if (Session.get("counter")>=2)
    {   console.log("setting text true a")
  Template.instance().state.set("text", true)
    }
 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
   Session.set("color", "green")
    
  }
  else if (result==="red")
  {

    if (Template.instance().state.get("kanban")===true)
    {
     

    }
    record=record+1

    Session.setPersistent("record", record)
    //Tell what partnumber should have been
    
    
    $('#initials').val('');
  Session.set("color", "red")
   
    
  }
 
}

else if (typeof ReactiveMethod.call('compare', scan2,Session.get("scanned"))==="string" &&Template.instance().state.get("kanban")==false &&run==true )
{

     var result=ReactiveMethod.call('compare', scan2,Session.get("scanned"))
     Session.set("result",result)
    

 if(result==="red" && run===true)
      {
      
      if (Session.get("counter")>=2)
    {  console.log("setting text false")
  Template.instance().state.set("kanbangood",true)
      Template.instance().state.set("text", false)
    }
 Session.set("descshow",true)
  var test3="The partnumber you scanned was: "
       test3=test3.concat(scan2)
//don't show description if it was ekanban
Materialize.toast(test3, 999000,'blue ch z-depth-2')
        if (typeof scan2desc=="string")
        {
       var test4="Description: "
         test4=test4.concat(scan2desc)
        Materialize.toast(test4, 999000,'blue ch z-depth-2')
        Template.instance().state.set('partscandesc',test4)
      }
     var test2="The partnumber should have been: "
   
    test2=test2.concat(Session.get("scanned"))
     var test5="Description: "
   
    test5=test5.concat(Session.get("scannedDesc"))
 
  Materialize.toast(test2, 999000,'orange ch z-depth-2')
    Materialize.toast(test5, 999000,'orange ch z-depth-2')
//I also need to show a toast with a button that in it
//
var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);
  Materialize.toast1($toastContent, 999000, 'ch');
$('#test1').mouseup(function() { this.blur() })


    Template.instance().state.set('partscan', test3);
    
    Template.instance().state.set('partshould',test2)
    Template.instance().state.set('partshoulddesc',test5)

  
     run=false
   }
   else if(result==="green" && run===true)
   {
    Session.set("descshow",false)
    Materialize.toast('Match', 4000,'indigo lighten-1 z-depth-2')
    //count shouldn't go up after the bag and box are scanned and
    //the scanned item was ekanban
   
    count= Session.get("counter")

    count = count+1
 

   
      //set this true
 


    
      Session.set("counter", count)
         if (Session.get("counter")>=2)
    {  console.log("setting text true b")
  Template.instance().state.set("text", true)
    }
 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
   Session.set("color", "green")
    
  }
  else if (result==="red")
  {

    if (Template.instance().state.get("kanban")===true)
    {
     

    }
    record=record+1

    Session.setPersistent("record", record)
    //Tell what partnumber should have been
    
    
    $('#initials').val('');
  Session.set("color", "red")
   
    
  }
 
}
else
{
  $('#initials').val('');
}


  },
   good1: function()
   {
    //basically this will return a boolean for whether the background should turn green or not and go to the next page
    //put this comparison on the server side
    //
    /*
      This function is going through and finding out if the scanned printed bag/box label
      or kanban was good or not.  If it was incorrect it lets the user know what the scanned
      item should have been. 

    */

    console.log("inside good1 ")
Template.instance().state.set('partscan', null);
  
    Template.instance().state.set('partshould',null)
    Template.instance().state.set('partshoulddesc',null)
 Session.set("kanbantag", false)

  console.log("This is the scan2 in good " + Session.get("scan2"))
 console.log("This is the rawmaterial check " +ReactiveMethod.call('rawmaterial', Session.get("scan2")) )
console.log("Is array "+Array.isArray( ReactiveMethod.call('rawmaterial', Session.get("scan2")))+"run is true"+run+"counter gte 2" + Session.get("counter"))
   if (typeof ReactiveMethod.call('total', Session.get("scan2"))==="object" &&run===true )
 {
  console.log("a box label/printed bag was scanned")
  /*
checks if box label/printed bag was scanned
  */


      if (Session.get("scan2").charAt(0)==3)
    {
      
      //Label scanned
      Template.instance().state.set("bag", false)
      Session.set("boxtag",Session.get("scan2"))
    }
    else
    {
      //blister card scanned

      Template.instance().state.set("bag", true)
      Session.set("bagtag",Session.get("scan2"))
    }

  
     var scan2=ReactiveMethod.call('total', Session.get("scan2"))
     var scan2desc=scan2.desc
     scan2=scan2.partnumber
  }
  else if (Array.isArray( ReactiveMethod.call('rawmaterial', Session.get("scan2")))&&run===true &&  Session.get("counter")>=2)
  {
     /*
      checks if kanban was scanned
  */
console.log("grabbing the scan2itemid")
  var contents=ReactiveMethod.call('rawmaterial', Session.get("scan2"))
    Template.instance().state.set("kanban", true)
     //Template.instance().state.set("kanbangood", true)
     /*
          This goes through kanbans db and finds the itemid, desc, and part number 
     */
     var scan2itemid=contents[0]
    
     var scan2desc=contents[1]
      var scan2=contents[2]
     /*
        Need a description too.
     */
 /*
  scan2 is the item id,
  Session.get("scanned") is the partnumber

 */
 
  }
/*

I will have two different if statements.
One is for the raw material the other for printed bags/box labels 

*/






//This function is comparing the job order partnumber to the partnumber of the scanned item
// A more efficient thing to do would be to just check if the scanned item
//partnumber is within the job order?
/*
This logic is comparing the partnumber of the job order to that of the printed bag,box label, or kanban

*/

/*
This first if statement runs through if there is a kanban ticket scanned  

*/
if (Template.instance().state.get("kanban")&&run===true && Session.get("counter")>=2)
{

   //var result=ReactiveMethod.call('compareKanban', scan2itemid,Session.get("scanned"))
     //Session.set("result",result)
    /*
      Instead of using a comparekanban fxn,  run a for loop that checks if the scanid
      is matched with one of the kanbans in the kanbanarray


    */

/*
This is holding descriptions of the kanban
I need the actually items


*/
console.log("checking kanbanPieces")
   var kanbanPieces =Session.get("itemContents")
console.log('this is kanbanPieces slot 0 ' + kanbanPieces[0])
   

 if (Array.isArray(kanbanPieces) && scan2itemid!=undefined)
 {    
  

      var count=kanbanPieces[kanbanPieces.length-1]
      
       //Contents is holding all of the kanbans for this order
      console.log("this is the count "+ count)
      for(var i = 0; i < count; i++){
              //In this for loop I need to check if  the scan2itemid is equal to an item in the kanbanPieces array  
              //check if the scanned item == kanbanPieces[i]     
                console.log("this is kanbanPieces in good1 " +kanbanPieces[i])
                console.log("this is scan2itemid " +scan2itemid)
                if (scan2itemid==kanbanPieces[i])
                    {
                      console.log("kanban green")
                      result="green"
                      break;

                    }
                    else
                    {
                      console.log("kanban red")
                      result="red"
                    }
              } //end of for loop
    
  }//end of is array if



console.log("this is the result after kanbancheck " + result + " this is the run " + run)















 if(result==="red" && run===true)
      {
    
     if (Session.get("counter")>=2)
    {  console.log("setting text false")
   Template.instance().state.set("kanbangood",true)
      Template.instance().state.set("text", false)
    }
 Session.set("descshow",true)
  var test3="The partnumber you scanned was: "
       test3=test3.concat(scan2)
//don't show description if it was ekanban
Materialize.toast(test3, 999000,'blue ch z-depth-2')
        if (typeof scan2desc=="string")
        {
       var test4="Description: "
         test4=test4.concat(scan2desc)
        Materialize.toast(test4, 999000,'blue ch z-depth-2')
        Template.instance().state.set('partscandesc',test4)
      }
     var test2="The partnumber should have been: "
   
    test2=test2.concat(Session.get("scanned"))
     var test5="Description: "
   
    test5=test5.concat(Session.get("scannedDesc"))
 
  Materialize.toast(test2, 999000,'orange ch z-depth-2')
    Materialize.toast(test5, 999000,'orange ch z-depth-2')
//I also need to show a toast with a button that in it
//
var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);
  Materialize.toast1($toastContent, 999000, 'ch');
$('#test1').mouseup(function() { this.blur() })


    Template.instance().state.set('partscan', test3);
    
    Template.instance().state.set('partshould',test2)
    Template.instance().state.set('partshoulddesc',test5)

  
     run=false
   }
   else if(result==="green" && run===true)
   {
    Session.set("descshow",false)
    Materialize.toast('Match', 4000,'indigo lighten-1 z-depth-2')
    //count shouldn't go up after the bag and box are scanned and
    //the scanned item was ekanban
   
    count= Session.get("counter")
   
    count = count+1
 

 


    
      Session.set("counter", count)
         if (Session.get("counter")>=2)
    {  console.log("setting text true c")
  Template.instance().state.set("text", true)
    }
 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
   Session.set("color", "green")
    
  }
  else if (result==="red")
  {

    if (Template.instance().state.get("kanban")===true)
    {
     

    }
    record=record+1

    Session.setPersistent("record", record)
    //Tell what partnumber should have been
    
    
    $('#initials').val('');
  Session.set("color", "red")
   
    
  }
 
}

else if (typeof ReactiveMethod.call('compare', scan2,Session.get("scanned"))==="string" &&Template.instance().state.get("kanban")==false &&run==true )
{

     var result=ReactiveMethod.call('compare', scan2,Session.get("scanned"))
     Session.set("result",result)
  

 if(result==="red" && run===true)
      {
        if (Session.get("counter")>=2)
    {  console.log("setting text false")
      Template.instance().state.set("kanbangood",true)
      Template.instance().state.set("text", false)
  
    }
 Session.set("descshow",true)
  var test3="The partnumber you scanned was: "
       test3=test3.concat(scan2)
//don't show description if it was ekanban
Materialize.toast(test3, 999000,'blue ch z-depth-2')
        if (typeof scan2desc=="string")
        {
       var test4="Description: "
         test4=test4.concat(scan2desc)
        Materialize.toast(test4, 999000,'blue ch z-depth-2')
        Template.instance().state.set('partscandesc',test4)
      }
     var test2="The partnumber should have been: "
   
    test2=test2.concat(Session.get("scanned"))
     var test5="Description: "
   
    test5=test5.concat(Session.get("scannedDesc"))
 
  Materialize.toast(test2, 999000,'orange ch z-depth-2')
    Materialize.toast(test5, 999000,'orange ch z-depth-2')
//I also need to show a toast with a button that in it
//
var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);
  Materialize.toast1($toastContent, 999000, 'ch');
$('#test1').mouseup(function() { this.blur() })


    Template.instance().state.set('partscan', test3);
    
    Template.instance().state.set('partshould',test2)
    Template.instance().state.set('partshoulddesc',test5)

  
     run=false
   }
   else if(result==="green" && run===true)
   {
    Session.set("descshow",false)
    Materialize.toast('Match', 4000,'indigo lighten-1 z-depth-2')
    //count shouldn't go up after the bag and box are scanned and
    //the scanned item was ekanban
   
    count= Session.get("counter")
   
    count = count+1
  

    


    
      Session.set("counter", count)
        if (Session.get("counter")>=2)
    {  console.log("setting text true d")
  Template.instance().state.set("text", true)
    }
    
 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
   Session.set("color", "green")
    
  }
  else if (result==="red")
  {

    if (Template.instance().state.get("kanban")===true)
    {
     

    }
    record=record+1

    Session.setPersistent("record", record)
    //Tell what partnumber should have been
    
    
    $('#initials').val('');
  Session.set("color", "red")
   
    
  }
 
}
else
{
  $('#initials').val('');
}


  },
  text:function()
  {
   
//I need to determine if a bag was scanned 


var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1


if(  Session.get("counter")==-2)
   {
    /* $(document).keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(keycode == '13') {
      console.log("enter key pressed ")
       $('.8').trigger('click');   
    }
});*/

    return "Please enter your initials"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==-1)
   {

    return "Please scan the part number"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==0)
   {


    Template.instance().state.set("check",false)

  function testbag()
  {
   
         if (Session.get("bagquestion")===false)
{
   
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbag, 20000);
 
    




    return "Please scan the printed bag or box label"
    //Session.set("scan",0)
   
  }      
    
    else if ( Session.get("counter")==1  )
    {//Here I should show a toast that indicates what the user just scanned
       function testbox()
  {
  
         if (Session.get("bagquestion")===false)
{
    
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbox, 20000);
   


if (Template.instance().state.get("bag")===true || Session.get("bagoverride")==true)
{
  function testbag2()
  {
   
         if (Session.get("bagquestion")===false)
{
    
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbag2, 20000);
   Session.set("bagchecktext", "Box Label Override")
 return "Please scan the box label: "

}
else if (Template.instance().state.get("bag")===false || Session.get("boxoverride")==true)
{
  //Here the box label was scanned
  function testbox2()
  {
    
         if (Session.get("bagquestion")===false)
{
    
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbox2, 20000);
  Session.set("bagchecktext", "Printed Bag Override")
  return "Please scan the printed bag: "
}
      
    
    //Materialize.toast(test3, 15000,'blue')
    }
    else if ( Session.get("counter")===2 && Session.get("kanbancount")>0 )
    {
      
      /*
        if TC==2 then "Please scan the ekanban"
        if TC>2 && KC-TC>=0 then "Please scan the next ekanban"
    
      */
      
   
       function testkanban()
  {
         if (Session.get("kanbanquestion")===false)
{
    
 Session.set("kanbanquestion", true)
}
}
    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testkanban, 20000);
 
      Template.instance().state.set("kanbanshow", true)
    
      return "Please scan the eKanban ticket part number: "
     
    }
    else if ( Session.get("counter")>2 && kanbancount- Session.get("counter")>=0 && Session.get("kanbancount")>0)
    {
        function testkanban2()
  {
         if (Session.get("kanbanquestion")===false)
{
    
 Session.set("kanbanquestion", true)
}
}
    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testkanban2, 20000);
 
      Template.instance().state.set("kanbanshow", true)
      return "Please scan the next ekanban ticket part number"

    }
    else if (kanbancount- Session.get("counter")<0 || (Session.get("counter")>1&&Session.get("kanbancount")==0))

    {
      Session.set("scan2",null)
   
       Template.instance().state.set("kanban", false)
      Session.set("kanbanquestion", false)
      Session.set("bagquestion", false)
      var word=myFunction()
      var front = '<span class="toasttextbig center spantest"> '
      front = front.concat(word)
      front=front.concat(' </span>')
//var color=myFunctionColor()
//color=color.concat(" cp z-depth-2")

//Materialize.toast(word, 4000, color)
       Materialize.toast(front, 999999000, 'indigo lighten-1 cp z-depth-2')
Meteor.call('scansInsert',Session.get("tech") ,Session.get("scanned"),Session.get("record"),Session.get("kanbanoverride"),Session.get("bagoverride"),Session.get("boxoverride"))
     var x = document.getElementById("snackbar")
  /*
      Showing the snack bar here with the part number of the particular job order

  */
  if (x.className != "show cp z-depth-2" && typeof Session.get("scannedPartnumber")=="string")
{
    x.className = "show cp z-depth-2";
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 999999000);
}

      //I need to have a session variable I setup next that triggers the final toast and snack bar to pop up
    
      Session.set("start", 3)
      run=true
    }
    
      
    
           

       
   
    },
text1:function()
  {
   
//I need to determine if a bag was scanned 


var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1


if(  Session.get("counter")==-2)
   {

    return "Please enter your initials"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==-1)
   {

    return "Please scan the part number"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==0)
   {


    Template.instance().state.set("check",false)

  function testbag()
  {


         if (Session.get("bagquestion")===false)
{
   
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbag, 20000);
 
    




    return "Please scan the blister card or label"
    //Session.set("scan",0)
   
  }      
    
    else if ( Session.get("counter")==1  )
    {//Here I should show a toast that indicates what the user just scanned
       function testbox()
  {
   
         if (Session.get("bagquestion")===false)
{
    
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbox, 20000);
   


if (Template.instance().state.get("bag")===true || Session.get("bagoverride")==true)
{
  function testbag2()
  {
    
         if (Session.get("bagquestion")===false)
{
   
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbag2, 20000);
   Session.set("bagchecktext", "Box Label Override")
 return "Please scan the label: "

}
else if (Template.instance().state.get("bag")===false || Session.get("boxoverride")==true)
{
  function testbox2()
  {
   
         if (Session.get("bagquestion")===false)
{
    
 Session.set("bagquestion", true)
}

}


    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testbox2, 20000);
  Session.set("bagchecktext", "Printed Bag Override")
  return "Please scan the blister card: "
}
      
    
    //Materialize.toast(test3, 15000,'blue')
    }
    else if ( Session.get("counter")===2 && Session.get("kanbancount")>0 )
    {
      
      /*
        if TC==2 then "Please scan the ekanban"
        if TC>2 && KC-TC>=0 then "Please scan the next ekanban"
    
      */
      
   
       function testkanban()
  {
         if (Session.get("kanbanquestion")===false)
{
    
 Session.set("kanbanquestion", true)
}
}
    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testkanban, 20000);
 
      Template.instance().state.set("kanbanshow", true)
    
      return "Please scan the eKanban ticket part number: "
     
    }
    else if ( Session.get("counter")>2 && kanbancount- Session.get("counter")>=0 && Session.get("kanbancount")>0)
    {
        function testkanban2()
  {
         if (Session.get("kanbanquestion")===false)
{
    
 Session.set("kanbanquestion", true)
}
}
    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(testkanban2, 20000);
 
      Template.instance().state.set("kanbanshow", true)
      return "Please scan the next ekanban ticket part number"

    }
    else if (kanbancount- Session.get("counter")<0 || (Session.get("counter")>1&&Session.get("kanbancount")==0))

    {
      Session.set("scan2",null)
 
       Template.instance().state.set("kanban", false)
      Session.set("kanbanquestion", false)
      Session.set("bagquestion", false)
      var word=myFunction()
      var front = '<span class="toasttextbig center spantest"> '
      front = front.concat(word)
      front=front.concat(' </span>')
//var color=myFunctionColor()
//color=color.concat(" cp z-depth-2")

//Materialize.toast(word, 4000, color)
       Materialize.toast(front, 999999000, 'indigo lighten-1 cp z-depth-2')
Meteor.call('scansInsert',Session.get("tech") ,Session.get("scanned"),Session.get("record"),Session.get("kanbanoverride"),Session.get("bagoverride"),Session.get("boxoverride"))
     var x = document.getElementById("snackbar")
 // console.log("This is the class name " + x.className)
  if (x.className != "show cp z-depth-2" && typeof Session.get("scannedPartnumber")=="string")
{
    x.className = "show cp z-depth-2";
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 999999000);
}

      //I need to have a session variable I setup next that triggers the final toast and snack bar to pop up
    
      Session.set("start", 3)
      run=true
    }
    
      
    
           

       
   
    },

  kanbancheck: function()
  {
  
//I'll use this function to check if there was a ticket entry or not
//If there wasn't I can send out a toast that asks the user if they want to override
//and finish the job
//I'll need a handle bar setup that only shows a button if this returns true
//basically return true if the counter is equal to 2 and a condition
//has been met that proves the person has no kanban ticket

//create a specific condition for the template instance confirming the user doesn't have an
//ekanban ticket

/*
I need to setup a greater wait time before I show the kanban ticket override

*/

if ( Template.instance().state.get("kanbangood")===true &&  Session.get("counter")>=2 &&Session.get("kanbanquestion")===true)
 
{ 


  //function test()
  //{
   
    Materialize.toast("Do you have a Kanban ticket?", 4000,'indigo lighten-1')
  good=true
  
  
    //Template.instance().state.set("kanbancheck",true)
    
    //I should return good even when a bad kanban ticket is scanned 
    //currently this isn't running if a kanban is scanned 

  
  //}
Session.set("kanbanquestion", false)
  // setTimeout(test, 5000);


   

}
else if ( Session.get("counter")>=2 &&Session.get("kanbanquestion")===true)
{

Materialize.toast("Do you have a Kanban ticket?", 4000,'indigo lighten-1 z-depth-2')
  good=true
  
    
Session.set("kanbanquestion", false)
}
return good
 },
 bagcheck: function()
  {
  /*
    This will pop up if the user has waited for a certain amount of time without scanning
    the printed bag/box label




  */

if ( Session.get("counter")>=0 &&Session.get("bagquestion")===true)
 
{ 


  //function test()
  //{
   
   /*
If statement should be based on whether the user scanned a printed bag or box label

if (Template.instance().state.get("bag")===true)
{
 return "Please scan the box label: "

}


   */

/*
    The first thing to do is ask if the the user has a printed bag or box label
    I can determine whether to do this or not based on the current count


*/
if (Session.get("counter")==0 && Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a Printed bag/Box label?", 4000,'indigo lighten-1')
 Session.set("bagquestion", false)

}



if (Template.instance().state.get("bag")===true && Session.get("counter")>0 &&Session.get("counter")<2 &&Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a box label?", 4000,'indigo lighten-1')
 
Session.set("bagquestion", false)
}
else if (Template.instance().state.get("bag")===false && Session.get("counter")>0&&Session.get("counter")<2 &&Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a printed bag?", 4000,'indigo lighten-1')
 
Session.set("bagquestion", false)
}
   
   // Materialize.toast("Do you have a Kanban ticket?", 4000,'indigo lighten-1')
 


  goodbag=true
  
  
    //Template.instance().state.set("kanbancheck",true)
    
    //I should return good even when a bad kanban ticket is scanned 
    //currently this isn't running if a kanban is scanned 

  
  //}

  // setTimeout(test, 5000);


   

}

/*
set goodbag to false if the count is >=2
*/
if (Session.get("counter")>=2)
{
  goodbag=false
}

/*


*/


return goodbag
 },
 bagcheck1: function()
  {
  /*
    This will pop up if the user has waited for a certain amount of time without scanning
    the printed bag/box label




  */

if ( Session.get("counter")>=0 &&Session.get("bagquestion")===true)
 
{ 


  //function test()
  //{
   
   /*
If statement should be based on whether the user scanned a printed bag or box label

if (Template.instance().state.get("bag")===true)
{
 return "Please scan the box label: "

}


   */

/*
    The first thing to do is ask if the the user has a printed bag or box label
    I can determine whether to do this or not based on the current count


*/
if (Session.get("counter")==0 && Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a Blister card/Label?", 4000,'indigo lighten-1')
 Session.set("bagquestion", false)

}



if (Template.instance().state.get("bag")===true && Session.get("counter")>0 &&Session.get("counter")<2 &&Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a Label?", 4000,'indigo lighten-1')
 
Session.set("bagquestion", false)
}
else if (Template.instance().state.get("bag")===false && Session.get("counter")>0&&Session.get("counter")<2 &&Session.get("bagquestion")===true)
{
  //At this point the user scanned the printed bag
   Materialize.toast("Do you have a Blister card?", 4000,'indigo lighten-1')
 
Session.set("bagquestion", false)
}
   
   // Materialize.toast("Do you have a Kanban ticket?", 4000,'indigo lighten-1')
 


  goodbag=true
  
  
    //Template.instance().state.set("kanbancheck",true)
    
    //I should return good even when a bad kanban ticket is scanned 
    //currently this isn't running if a kanban is scanned 

  
  //}

  // setTimeout(test, 5000);


   

}

/*
set goodbag to false if the count is >=2
*/
if (Session.get("counter")>=2)
{
  goodbag=false
}

/*


*/


return goodbag
 },
 colorFxn: function()
 {
//here I will 
//basically I am showing the scanned color in this function.
//I need to have two different functions based on if the scanned item 
// was good or not
 
//only do this if the job scanned was green
var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1

/*
If there isn't a kanban ticket for this order
I need to find the partnumber of the kan


*/

/*
If the user presses the kanban override button then I need to determine the kanban associated with the job order
and send that into the if statement below 


*/

/*
Session.get("kanbanoverride")==true

Set this to true when the user succesfully enters the password
*/
//Session.get("kanbansucceeded")

var counter=Session.get("counter")
console.log("counter in colorFxn "+counter)
if (counter>=2)
{
//This fxn isn't updating here for some reason


var colormethod=ReactiveMethod.call('color', Session.get("scan2"),Session.get("kanbansucceeded"),Session.get("scanned"))
// Session.setPersistent("kanbanoverride",true)

}
else if (counter>=2&&Session.get("kanbansucceeded")==true)
{  console.log("setting text true kanban succeded")
   Template.instance().state.set("text", true)
var colormethod=ReactiveMethod.call('color', Session.get("scan2"),Session.get("kanbansucceeded"),Session.get("scanned"))
// Session.setPersistent("kanbanoverride",true)


}

if (Session.get("kanbansucceeded")==true)
{
/*
At this point I need to go into the database

*/


}

//Only run this code if count is 
//console.log("color typeof is object " + typeof ReactiveMethod.call('color', Session.get("scan2"),Session.get("kanbanoverride"),Session.get("scanned"))==="object")

console.log("colormethod "+colormethod+" counter "+counter+"template kanban "+Template.instance().state.get("kanban")+"run "+run)
if ((typeof colormethod!="undefined"&&counter>=2&&run==true)||Session.get("kanbansucceeded")==true)
  {

   
 console.log("trying to display the color")



Session.set("colorshow", true)

    //This checks if it is a raw material that was
 var object= colormethod
 color=object.Description
var span1='<span class="toasttextbig center spantest">'
color=span1.concat(color)
var span2='</span>'
color=color.concat(span2)


 //put this color into a reactive var and send it to spacebar
 Template.instance().state.set("colorDescription", color)
 var test2=color
   
   /*var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);*/

   // create a div that holds the text of test 2
 /*var  colorText='<div class="mytextnew"> '
colorText=colorText.concat(test2)
colorText=colorText.concat(' </div>')
console.log("this is the color text "+ colorText)
var $toastContent1 = $(colorText);*/




     //I can return the location of the image of the color
//I need to set a template variable to true here and then set it to false
//after 5 seconds
//That template variable will show set a template helper to true or false
//basically take "colors/" and concatenate the suffix from the colors db to it
//then add .jpg to the end
var suffix=object.Suffix

var colorLocation="colors/"
 colorLocation=colorLocation.concat(suffix);
 colorLocation=colorLocation.concat(".jpg")



colorshow=true



Template.instance().state.set("color", colorLocation)


var colortest='<div class="mytextnew"> <img class="img-responsive z-depth-2 " height="150px" width="150px" src="colors/'
colortest=colortest.concat(suffix)
colortest=colortest.concat(".jpg\"")
colortest=colortest.concat(" /> </div>")

  
  var $toastContent = $(colortest);

  //so here I need to determine if the scan was
  //red or green
  //Then based on that determine how long I should show
  //the color for
//Template.instance().state.set("text", true)  if this is true then it was a green scan

//console.log("this is the text " +Template.instance().state.get("text"))
/*
kanbancount- Session.get("counter")
*/

//Make this go once
console.log("this is template text "+ Template.instance().state.get("text"))
if (Template.instance().state.get("text")===false)
{
   Materialize.toast2(test2, 10000, 'indigo lighten-1 z-depth-2 toasttextbig');
    Materialize.toast2($toastContent, 10000, '');
}
 else if (Template.instance().state.get("text")===true)
{

   Materialize.toast2(test2, 999999000, 'indigo lighten-1 cp z-depth-2 toasttextbig');
 
    Materialize.toast2($toastContent, 999999000, 'cp');
    Session.setPersistent("kanbansucceeded",false)
}



function x() {
   var promise = new Promise(function(resolve, reject) {
     setTimeout(function() {
      
       resolve(false);
     }, 10000);
   });
   return promise;
}

x().then(function(done) {
  
  Session.set("colorshow", done)
  console.log(done); // --> 'done!'
});






  }












 },
 piecesperbag: function () {




//So I need to take 1000 and divide it by the usage rate x 1000

var bag = ReactiveMethod.call('boxes', Session.get("scan"))

if (typeof bag!="boolean" &&typeof bag!="undefined" )
{
var bagusage=bag[1]




var piecesPerBag=Number(1000)/(Number(1000)*bagusage)
Session.set("piecesPerBag",piecesPerBag)

      var output=piecesPerBag.toString()
      if (piecesPerBag===1)
      {
     output= output.concat(" piece per bag")
 }
 else
 {
  output= output.concat(" pieces per bag")
  }
    //make a new toast to increase the size of text or put it inside of a 
    //span element
    var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'indigo lighten-1 cp z-depth-2')
 }
  },
  bagsperbox: function () {


var box = ReactiveMethod.call('boxes', Session.get("scan"))
if (typeof box!="boolean")
{
var boxusage=box[0]


//So I need to take 1000 and divide it by the usage rate x 1000

var boxes= Number(1000)/(Number(1000)*boxusage)


var bagsPerBox= boxes/Session.get("piecesPerBag")
//convert to string


/*
var span1='<span class="toasttextbig center spantest">'
color=span1.concat(color)
var span2='</span>'
color=color.concat(span2)
*/
//put the bagsper box inside a span

    
     var output=bagsPerBox.toString()
     if (bagsPerBox==1)
      {
     output= output.concat(" bag per box")
 }
 else
 {
  output= output.concat(" bags per box")
  }
    
var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'indigo lighten-1 cp z-depth-2 toasttextbig')
  

  }

  },
  kanbanPieces: function () {
/*
kanbanPieces contains all of the kanbans associated with a particular order.

This fxn is displaying descriptions of all the kanbans in a particular order using
toasts.
*/

var kanbanPieces =Session.get("contents")

   

 if (Array.isArray(kanbanPieces))
 {    
  

      var count=kanbanPieces.pop();
     
        countOutput=count.toString()
        countOutput=countOutput.concat(" plastic pieces")
        Materialize.toast(countOutput, 999999000, 'indigo lighten-1 cp z-depth-2 toasttextbig')
        for (var i=0; i<kanbanPieces.length; i++)
            {
              
                output=kanbanPieces[i]
//var span1='<span class="toasttextbig center spantest">'
//output=span1.concat(output)
//var span2='</span>'
//output=output.concat(span2)
     Materialize.toast(output, 999999000, 'indigo lighten-1 cp z-depth-2 toasttextbig')
  





              } //end of for loop
    
  
    
  

  }//end of is array if

/*
     console.log("this is the bags per box " + bagsPerBox)
     var output=bagsPerBox.toString()
     if (bagsPerBox==1)
      {
     output= output.concat(" bag per box")
 }
 else
 {
  output= output.concat(" bags per box")
  }
    */


  },
partnumber: function()
{
//create a reactive method that I call here that returns the current partnumber
//or use a previously created partnumber
if (typeof Session.get("scannedPartnumber")=="string")
{
return Session.get("scannedPartnumber")
}

},
 kanbanamount: function()
 {
  //basically I need to find the total kanban
  //this will be in Session.get("kanbancount")
  //
  var kanbancount=Session.get("kanbancount")

  //I also need to retrieve an array from the server that has
  // all of the partnumbers associated with the order
  //basically I will loop through the kanban db and store
  //all of the partnumbers 

  //Then I will
  return



 }
 


});





 Template.three.events({
  'click .0': function(event, template){
 Session.set("start",1)
 count=-3
    
      Session.set("counter", count)

},
 'click .1': function(event, template){
 Session.set("start",0)
  count=-1
    
      Session.set("counter", count)

},
'click .2': function(event, template){
/*
This is the kanban override button

*/



   $('.txt_name').val('');
      $('.txt_name2').val('');
   setTimeout(function(){ $('.txt_name2').focus(); 



 }, 500);
   
   Session.set("descshow",false)
//I need to go to the the final part of the app at this point
},
'click .20': function(event, template){

   $('.txt_namebagbox').val('');
      $('.txt_name2bagbox').val('');
   setTimeout(function(){ $('.txt_name2bagbox').focus(); 



 }, 500);

  
//I need to go to the the final part of the app at this point
},
'click .3': function(event, template){

$( ".ch" ).hide();
  $( ".modal-dialog" ).hide();
 Session.set("descshow",false)
},
'click .4': function(event, template){
 Router.go('one')

},
'click .6': function(event, template){

$( ".ch" ).hide();
  $( ".modal-dialog" ).hide();
 Session.set("descshow",false)
 


},
'click .8': function(event, template){
 //Router.go('one')

  var test = $( "#initials" ).val()
   Session.setPersistent("tech", test)

 if (test.length==3)
 {
  count=count+1
   
      Session.set("counter", count)
 $('#initials').val('');
$("#initials").focus();
/*
Show tech name here using notify or 
*/
}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('#initials').val('');
$("#initials").focus();
}





},
'click .9': function(event, template){
 //Router.go('one')

 Session.set("start",0)
  count=count+1

      Session.set("counter", count)
 
$("#initials").focus();








},
'click .10': function(event, template){
 //Router.go('one')
//Go to the scan job order

  Session.set("start",0)
 Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)

Session.setPersistent("record", 0)
Session.setPersistent("kanbanoverride", false)
Session.setPersistent("kanbansucceeded",false)
Session.setPersistent("bagoverride", false)
Session.setPersistent("boxoverride", false)
Session.set("contents",null)
Session.set("itemContents",null)
Session.set("kanbancheck", false)

Session.set("kanbantag", 0)
Session.set("scanned",null)
 Session.set("kanbanquestion", false)
 Session.set("bagquestion", false)
 goodbag=false
 Session.set("descshow",false)
 Session.set("result", null)
$( ".cp" ).hide();

 Session.setPersistent("scannedOrdernumber", null)
  var x = document.getElementById("snackbar")
   x.className = "cp z-depth-2";
    colortest=true
 good=null
 goodbag=null
 bag=0
 box=0
 test=0
 run=true
 record=0
  count=-2
    
      Session.set("counter", count)
     /* setTimeout(function(){
count=count+1

      Session.set("counter", count)

        }, 500);*/

   
 setTimeout(function(){
$("#initials").focus();

        }, 500);









},
'click .11': function(event, template){
 //Router.go('one')
//There is a new tech at this point

  Session.set("start",0)
 Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)
Session.set("scanned",null)
Session.setPersistent("record", 0)
Session.setPersistent("kanbanoverride", false)
Session.setPersistent("kanbansucceeded",false)
Session.setPersistent("bagoverride", false)
Session.setPersistent("boxoverride", false)
Session.set("contents",null)
Session.set("itemContents",null)
Session.set("kanbancheck", false)
 Session.set("bagquestion", false)
 goodbag=false
Session.set("kanbantag", 0)

 Session.set("kanbanquestion", false)
 Session.set("descshow",false)
 Session.set("result", null)


 Session.setPersistent("scannedOrdernumber", null)
  var x = document.getElementById("snackbar")
   x.className = "cp z-depth-2";
    colortest=true
 good=null
 bag=0
 box=0
 test=0
 run=true
 record=0
  count=-2
    
      Session.set("counter", count)
 $("#initials").focus();









},
'click .15': function(event, template){

var test = $('.txt_name').val();

/*
Basically if test is equal to the password then

*/
var test2 = $('.txt_name2').val();
 if (test2.length==3)
 {

   
     
// $('#initials').val('');
//$("#initials").focus();

}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('.txt_name2').val('');
$(".txt_name2").focus();
}



if (test==password && test2.length==3)
{
//Have a toast pop up for 10 seconds saying correct
Materialize.toast('Password correct, nice job', 8000,'indigo lighten-1 z-depth-2')
//At this point set session variable to indicate to show the color to true
Session.setPersistent("kanbanoverride",true)
Session.setPersistent("kanbansucceeded",true)

count=count+1

      Session.set("counter", count)
      //This closes the modal
       $('#myModalNorm').modal('toggle');
       //set timeout for half a second
       

       setTimeout(function(){ $("#initials").focus(); }, 500);
    //This refocuses the browser on the next input if there is another 

  /*
      I need to at this point figure out if there is a kanban for this order
      if there is I need to then send in the value of what the partnumber ought to be
      to the colors template helper function.

  */
//At this point the count needs to increase by 1
}
else if (test!=password)
{
  //toast saying it was incorrect
Materialize.toast('Please re-enter the password', 8000,'orange darken-2 z-depth-2')
   $('.txt_name').val('');
}

},
'click .16': function(event, template){
 //Router.go('one')
//There is a new tech at this point
  

 




},
'click .17': function(event, template){

   $('.txt_name').val('');
      $('.txt_name2').val('');
   setTimeout(function(){ $('.txt_name2').focus(); 



 }, 500);
  /*
  At this point the printed bag/box label was overrode.
  */
   

   //Session.set("descshow",false)
//I need to go to the the final part of the app at this point
},
'click .18': function(event, template){
/*Printed Bag override*/
Session.setPersistent("bagoverride",true)
var test = $('.txt_namebagbox').val();

/*
Basically if test is equal to the password then

*/
var test2 = $('.txt_name2bagbox').val();
 if (test2.length==3)
 {

   
     
// $('#initials').val('');
//$("#initials").focus();

}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('.txt_name2bagbox').val('');
$(".txt_name2bagbox").focus();
}



if (test==password && test2.length==3)
{
//Have a toast pop up for 10 seconds saying correct
Materialize.toast('Password correct, nice job', 8000,'indigo lighten-1 z-depth-2')

count=count+1

      Session.set("counter", count)
      //This closes the modal
       $('#myModalNormbag').modal('toggle');
       //set timeout for half a second
       

       setTimeout(function(){ $("#initials").focus(); }, 500);
    //This refocuses the browser on the next input if there is another 

  /*
      I need to at this point figure out if there is a kanban for this order
      if there is I need to then send in the value of what the partnumber ought to be
      to the colors template helper function.

  */
//At this point the count needs to increase by 1
}
else if (test!=password)
{
  //toast saying it was incorrect
Materialize.toast('Please re-enter the password', 8000,'orange darken-2 z-depth-2')
   $('.txt_namebagbox').val('');
}

},
'click .19': function(event, template){
/*Box label override*/
Session.setPersistent("boxoverride",true)
var test = $('.txt_namebagbox').val();

/*
Basically if test is equal to the password then

*/
var test2 = $('.txt_name2bagbox').val();
 if (test2.length==3)
 {

   
     
// $('#initials').val('');
//$("#initials").focus();

}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('.txt_name2bagbox').val('');
$(".txt_name2bagbox").focus();
}



if (test==password && test2.length==3)
{
//Have a toast pop up for 10 seconds saying correct
Materialize.toast('Password correct, nice job', 8000,'indigo lighten-1 z-depth-2')

count=count+1

      Session.set("counter", count)
      //This closes the modal
       $('#myModalNormbag').modal('toggle');
       //set timeout for half a second
       

       setTimeout(function(){ $("#initials").focus(); }, 500);
    //This refocuses the browser on the next input if there is another 

  /*
      I need to at this point figure out if there is a kanban for this order
      if there is I need to then send in the value of what the partnumber ought to be
      to the colors template helper function.

  */
//At this point the count needs to increase by 1
}
else if (test!=password)
{
  //toast saying it was incorrect
Materialize.toast('Please re-enter the password', 8000,'orange darken-2 z-depth-2')
   $('.txt_namebagbox').val('');
}

},
'click .section': function(event, template){
/*
Set this up to change based on a counter
So if the counter == 1 show raceway
if the counter ==2 show blister1
if the counter ==3 show husky

*/
sectionCounter=sectionCounter+1;
console.log("this is the sectionCounter "  +sectionCounter)
if (sectionCounter>=3)
{
sectionCounter=0;
}
console.log("this is the sectionCounter "  +sectionCounter)
  if (sectionCounter==0)
  {
 Session.set("section","raceway")
 
 }
 else if (sectionCounter==1)
 {
   Session.set("section","blister1")
 }
 else if (sectionCounter==2)
 {
   Session.set("section","husky")
 }


},
'keyup input': function(event) {
  //event.which ==13 is the enter key
  //If counter ==-2 then allow this 
  // 
      if (event.which === 13&&Session.get("counter")==-2) {

          var test = $( "#initials" ).val()
   

 if (test.length==3)
 {
  count=count+1
   Session.setPersistent("tech", test)
      Session.set("counter", count)
 $('#initials').val('');
$("#initials").focus();
/*
Show tech name here using notify or 
*/
}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('#initials').val('');
$("#initials").focus();
}


        













         event.stopPropagation();
         return false;
      }
   }

 });





/*
console.log("This is the count in green before incr " + count)
    console.log("this is the react var count " +  Session.get("counter"))
    count= Session.get("counter")
    console.log("count after set equal to counter " + count)
    count = count+1
  console.log("this is the count after incr " + count)

*/
