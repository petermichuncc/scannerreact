
//transfer in new methods to new scanner program later
Meteor.methods({
    workcenters: function(department) {

var results = [];
      var distinctEntries = _.uniq(Datacenters.find({department:department}, {sort: {workcenter:1}, fields: {workcenter:true,description:true}}).fetch().map(function(x) {
  console.log('this is the workcenter '+x.workcenter)
  var string=x.workcenter+" "+x.description
  results.push(string);
 
 }), true);
      results=results.sort(function(a,b) { return a - b; });
 return results;
    }
  });




  Meteor.methods({
    search: function(query, options) {
      options = options || {};

      // guard against client-side DOS: hard limit to 50
      if (options.limit) {
        options.limit = Math.min(50, Math.abs(options.limit));
      } else {
        options.limit = 50;
      }

      // TODO fix regexp to support multiple tokens
     var regex = new RegExp("" + query,"i" );
     console.log("this is the query of search method " + query)
     console.log("this is the data " + Dataentries.find({name: {$regex:  regex}}, options).fetch())
     // console.log("this is the data 2" + Dataentries.find({name: {$regex:  /yolanda/i}}, options).fetch().pop())
      

      return Dataentries.find({name: {$regex:  regex}}, options).fetch();
    }
  });

/*
  Template.opsearchtest.helpers({
    search: function(query, sync, callback) {
      Meteor.call('search', query, {}, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        callback(res.map(function(v){ return {value: v.name}; }));
      });
    }
  });

*/











Meteor.methods({
   datasInsert: function(name,date,status,department,workcenter,shift,planned,actual,productivity) {
  try{
    Dataentries.insert({
    name: name,
     date: date,
     employeestatus: status,
     department: department,
     workcenter: workcenter,
     shift:shift,
     planned:planned,
     actual:actual,
     productivity: productivity,
     timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS")
    });
}catch(err)
{
  
}
  },
  scansInsert: function(initials,partnumber,record,kanban,bag,box) {
  
     var post = {
       timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
        initials: initials,
        partnumber: partnumber,
        mismatches:record,
        kanbanoverride:kanban,
        bagoverride:bag,
        boxoverride:box

         
      };
      console.log("here is the partnumber " + post.partnumber)
    Scans.insert(post);

  },

  part: function(upc) {
    try{
 var newString=upc
      var upc=upc
  
  //I need to also check if the scanned upc is actually a partnumber

  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        return Upcs.find({upc:newString2}).fetch().pop().partnumber
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }

   

 

}catch(err)
{
console.log("error in the part meteor method " + err)
 return null
}
  },
  total: function(upc) {
    try{
      console.log("inside the total function")
     var newString=upc
      var upc=upc
  
  //I need to also check if the scanned upc is actually a partnumber
/*
This is checking if there is upc that exists for the scanned printed bag/box label

*/
  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        console.log("inside for loop ")
        console.log("type of answer "+ typeof Upcs.find({upc:newString2}).fetch().pop())
        return  Upcs.find({upc:newString2}).fetch().pop()
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }
 


        

   

 

}catch(err)
{
console.log("error in the part meteor method " + err)
 return false
}
  },
   desc: function(upc) {
     try{
      var newString=upc
      var upc=upc

      //I need to remove the first char, then test this
      // then I need to remove remaining ending chars one by one
      //Then start back again with word that has first char removed
      //remove the first char again and run the test again.
      //I'll need a double for loop
      for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        return Upcs.find({upc:newString2}).fetch().pop().desc
        break;
      }
      
        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }
 
   


}catch(err)
{
console.log("error in the desc meteor method " + err)

}
  },
  order: function(upc)
  {
    try{
     
      var part=[]
      //upc1=upc
      //console.log("this is upc1 "+ upc1)
      upc=upc.toString();
      upc=upc.trim();
      partnumber= null
       desc=null
      //I need to return the partnumber
        console.log("this is upc "+ upc)
       // console.log("this is upc1 "+ upc1)
     /*   Orders.find({partnumber:upc1}).map(function(doc) {
     if(typeof doc.partnumber=="string"||typeof doc.partnumber=="number")
     {
       partnumber= doc.partnumber
       desc=doc.desc
     }
    else
     {
       partnumber= null
       desc=null
     }


});*/


  Orders.find({partnumber:upc}).map(function(doc) {
     if(typeof doc.partnumber=="string"||typeof doc.partnumber=="number")
     {
       partnumber= doc.partnumber
       desc=doc.desc
     }
     else
     {
       partnumber= null
       desc=null
     }

});
  console.log("this is the desc " + desc)
  console.log("this is typeof desc "+ typeof desc)
  if (typeof desc=="string")
  {
    part.push(partnumber)
    part.push(desc)
    return part
    }
    else
    {
      console.log("returning false ")
      return false
    }


        /*
        if (Orders.find({partnumber:upc1}).count()>=1)
      {
        
      var partnumber=true
        console.log("test a order")
        partnumber= Orders.findOne({partnumber:upc1}).partnumber
      
        
      }
    else if (Orders.find({partnumber:upc}).count()>=1)
    { 
            var partnumber=true

          console.log("test b order")
        partnumber= Orders.findOne({partnumber:upc}).partnumber
      
      } 
      */ 
      //  console.log("this is the typeof partnumber " + typeof partnumber)
      //console.log("this is the partnumber "+ partnumber)

      //return partnumber

}catch(err)
{
  return false
}
  },
orderdesc: function(upc)
  {
    try{
     

    
      upc=upc.toString();
      upc=upc.trim();
      //I need to return the partnumber
        console.log("this is upc "+ upc)
    
  Orders.find({partnumber:upc}).map(function(doc) {
     if(typeof doc.partnumber=="string")
     {
       partnumber= doc.partnumber
     }

});
   //Here I need to look in the upc database and retrieve the description for the 
   //associated partnumber
   
   
   var desc=Upcs.findOne({partnumber:partnumber})
   return desc


}catch(err)
{
  return false
}
  },
 boxes: function(upc)
  {
    try{
     
 var box=null
 var boxdesc=null
    //  upc1=upc
      upc=upc.toString();
      upc=upc.trim();
      //this fxn takes in the upc of the order
     
var contents=[]
/*
slot 0 is the bag
*/

/*
only run this code once
so if the size of array is zero then run this code

*/

/*Kanbans.find({ itemid: { $regex: /^32/i }, partnumber:upc1}).map(function(doc) {
          console.log("test 32 typeof "+ typeof doc.itemid)
     if(typeof doc.usagerate=="number")
     {
      contents.push( doc.usagerate)
     }
  });
  }
  if (contents.length<1)
{
  Kanbans.find({ itemid: { $regex: /^31/i }, partnumber:upc1}).map(function(doc) {
    console.log("test 31 typeof "+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });
}
*/
/*
Work on this too look for the words "BOX" in the bill of sale


*/
if (contents.length<1)
{
   Kanbans.find({ desc: { $regex: /BOX/i },partnumber:upc}).map(function(doc) {
       console.log("There was a desc with BOX in it "+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
      contents.push( doc.usagerate)
     }
  });


 }

if (contents.length<1)
{
   Kanbans.find({ itemid: { $regex: /^32/i },partnumber:upc}).map(function(doc) {
       console.log("test 32 typeof "+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
      contents.push( doc.usagerate)
     }
  });
 }
 if (contents.length<1)
{
 Kanbans.find({ itemid: { $regex: /^31/i },partnumber:upc}).map(function(doc) {
     console.log("test 31 typeof "+ typeof doc.itemid)
     if(typeof doc.usagerate=="number")
     {
      contents.push( doc.usagerate)
     }
  });
}
/*
if (contents.length<1)
{
 Kanbans.find({ itemid: { $regex: /^37/i }, partnumber:upc1}).map(function(doc) {
    console.log("test 37 typeof 1"+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });
}
*/
if (contents.length<1)
{

  /*
  only run this code if there isn't a box

  */
   Kanbans.find({ itemid: { $regex: /^37/i },partnumber:upc}).map(function(doc) {
       console.log("test 37 typeof 2"+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
      contents.push( doc.usagerate)
     }
  });
}

console.log("this is slot 0 " + contents[0]+ "slot 1 "+ contents[1])

/*
slot 1 is the box
*/
/*
Kanbans.find({ itemid: { $regex: /^33/i },partnumber:upc1, desc:{ $regex: /POLY/i }}).map(function(doc) {
          console.log("test 33 typeof "+ typeof doc.itemid)
     if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });
  
  Kanbans.find({ itemid: { $regex: /^33/i },partnumber:upc1, desc:{ $regex: /BAG/i }}).map(function(doc) {
    console.log("test 33 typeof "+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });
*/
 Kanbans.find({ itemid: { $regex: /^33/i },partnumber:upc, desc:{ $regex: /POLY/i }}).map(function(doc) {
          console.log("test 33 typeof "+ typeof doc.itemid)
     if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });
  
  Kanbans.find({ itemid: { $regex: /^33/i },partnumber:upc, desc:{ $regex: /BAG/i }}).map(function(doc) {
    console.log("test 33 typeof "+ typeof doc.itemid)
    if(typeof doc.usagerate=="number")
     {
     contents.push( doc.usagerate)
     }
  });







return contents



if (typeof usagerate!="number")
{
return false
}








   //Here I need to look in the upc database and retrieve the description for the 
   //associated partnumber
   console.log("this is the box "+ box)
   return box


}catch(err)
{
  return false
}
  },
 
  rawmaterial: function(upc)
  {
      
     try{
      /*
        Change this to check if the partnumber is in the 
        kanban database 
        if it is then return the partnumber and description

      In this function the user is scanning the item id for the kanban
      so only look at the item id 

      */
    var contents=[]
   
      upc=upc.toString();
      upc=upc.trim();
       
      console.log("this is upc1 " + upc)
      
console.log("this is the count " +Kanbans.find({itemid:upc}).count())
  
 if (Kanbans.find({itemid:upc}).count()>0)
          {
           
          var itemid = Kanbans.findOne({itemid:upc}).itemid
          var desc = Kanbans.findOne({itemid:upc}).desc
          var partnumber = Kanbans.findOne({itemid:upc}).partnumber
           contents.push(itemid)
      contents.push(desc)
      contents.push(partnumber)
         }
 
   if (contents.length>0)
   {
      return contents
   }
   else
   {
    return false
   }

}catch(err)
{

}

  },

   

  compare: function(upc, upc2) {
    try{
 //This is comparing the partnumbers from the job order
 //and the printed bag, box label, and raw material
 //
 console.log("This is type of upc and upc2 "+typeof upc+" "+typeof upc2)
 console.log("this is upc and upc2 " + upc +" "+ upc2)
 if (typeof upc==="string"&&typeof upc2==="string")
 {console.log("this is upc 1 and 2 "+ upc+" "+upc2)
    if (upc==upc2)
    {console.log("returning green ")
      return "green"
    }
    else if (upc.includes(upc2))
    { console.log("compare a")
      return "green"
    }
    else if (upc2.includes(upc))
    {console.log("compare b")
      return "green"
    }

    else
    {
      return "red"
    }

 }
 

 

}catch(err)
{
  return "red"
console.log("error in the part meteor method " + err)

}
  },
   compareKanban: function(itemid, partnumber) {
    try{
/*
So this will take in an item id of a kanban
it will then search through the Kanbans db
for an entry that has that item id and part number of the original
scanned sku

*/
var color=null
 console.log("This is type of itemid and partnumber "+typeof itemid+" "+typeof partnumber)
 console.log("This is itemid and partnumber "+itemid+" "+partnumber)

 Kanbans.find({partnumber:partnumber,itemid:itemid}, { itemid : 1}).map(function(doc) {
         
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {
      console.log("green inside the comparekanban")
      color= "green"
      return "green"
     }
  });

if (color!="green")
{
  return "red"

}
return color





 

}catch(err)
{
  return "red"
console.log("error in the part meteor method " + err)

}
  },

  bagscanned: function(upc)
  {
try{

}catch(err)
{

}
  

  },
  
  text: function(upc)
  {
//I need the reactive var for the kanban boolean
//I need the reactive var for the counter
//I need the reactive var for the barcode check

try{

 var newString=upc
      var upc=upc
  var bag=0
  //I need to also check if the scanned upc is actually a partnumber

  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {

        bag=true
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }


if (bag===true && (upc.charAt(0)==7||upc.charAt(0)==8))
{
  printedbag=""
  boxlabel="box label"
}
else
{
  printedbag="printed bag"
  boxlabel=""
}


var text="Please scan the "
      text=text.concat(printedbag)
      text=text.concat(boxlabel)
      

return text
}catch(err)
{

}


  },
  kanbandb: function (upc)
  {
    try{
    //I need to find all the components associated with the scanned job order
    // 
    //Then I need to look into the kanban database
    //and search for items with the itemid of the
    //items ids in the orders database
    //  {sort: {itemid: -1}, limit: 1}
    
          // order.push(Orders.find({ordernumber:upc}))
          var contents=[]
 //upc1=upc
      upc=upc.toString();
      upc=upc.trim();
      count=0
      //So I need to use find one to grab a order with this partnumber

      //I need to return the partnumber
     
   
        console.log("this is upc in kanbandb"+ upc)
        /*
            Put the map functions into if statements
            that control if the run or not.
            The kanbans are running twice.



        */
       
       /*
          Add the id of the part into this array also

       */
      

   Kanbans.find({partnumber:upc,itemid: { $regex: /^8/i }}, { itemid : 1, desc: 1 }).map(function(doc) {
       console.log("test c typeof "+ typeof doc.itemid)
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {
      contents.push(doc.desc)
       count=count+1
     }
  });
 Kanbans.find({partnumber:upc,itemid: { $regex: /^9/i }}, { itemid : 1, desc: 1 }).map(function(doc) {
     console.log("test d typeof "+ typeof doc.itemid)
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {
      contents.push(doc.desc)
       count=count+1
     }
  });


       //I should return an array that contains the first item
       //as the count and any additional items as
       //entries in that array
     
     
   
     
        console.log("this is the kanbancount " + count)
        count=Number(count)
        contents.push(count)

          return contents
        

}catch(err)
{
  return null 
}

  },
 kanbanItems: function (upc)
  {
    try{
    //I need to find all the components associated with the scanned job order
    // 
    //Then I need to look into the kanban database
    //and search for items with the itemid of the
    //items ids in the orders database
    //  {sort: {itemid: -1}, limit: 1}
    
          // order.push(Orders.find({ordernumber:upc}))
          var contents=[]
 //upc1=upc
      upc=upc.toString();
      upc=upc.trim();
      var count=0
      //So I need to use find one to grab a order with this partnumber

      //I need to return the partnumber
     
   
        console.log("this is upc in kanbanItems"+ upc)
        /*
            Put the map functions into if statements
            that control if the run or not.
            The kanbans are running twice.



        */
       
       /*
          Add the id of the part into this array also

       */
      /*
            Make this an object and add itemids and itemdescriptions
            
      */

   Kanbans.find({partnumber:upc,itemid: { $in:[ /^8/i, /^9/i ]}}, { itemid : 1 }).map(function(doc) {
       console.log("test c typeof for kanbanItems "+ typeof doc.itemid)
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {

      contents.push(doc.itemid)
       count=count+1
     }
  });
 


       //I should return an array that contains the first item
       //as the count and any additional items as
       //entries in that array
     
     
   
     
        console.log("this is the kanbancount " + count)
        count=Number(count)
        contents.push(count)
        console.log("this is the kanbanItems 0 slot "+ contents[0])
          return contents
        

}catch(err)
{
  return null 
}

  }, 
 color: function (upcscan,overrode,scanned) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    


 
 //So I will need to remove the first 6 digits from a string containing the partnumber associated
      //with the ekanban
      //

      try{

     

  console.log("this is overrode " + overrode)
 console.log("this is scanned " + scanned)

/*
if overrode is true then I should grab the itemid
of a kanban from the kanban database 



*/


upc=upcscan
if (overrode==true)
{

Kanbans.find({partnumber:scanned,itemid: { $regex: /^8/i }}, { itemid : 1 }).map(function(doc) {
       console.log("kanban starting with 8 "+ typeof doc.itemid)
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {
      
        upc=doc.itemid
        console.log("this is the upc " + upc)
     }
  });
 Kanbans.find({partnumber:scanned,itemid: { $regex: /^9/i }}, { itemid : 1 }).map(function(doc) {
     console.log("kanban starting with 9 "+ typeof doc.itemid)
     if(typeof doc.itemid=="string"||typeof doc.itemid=="number")
     {
     
upc=doc.itemid
 console.log("this is the upc " + upc)
     }
  });


}




console.log("after kanban search " + upc)




/*
have this fxn take in a boolean
 if the boolean is true then I need to determine the itemid of the kanban


*/

/*
So I can send a upc of the kanban, a boolean, and also the scanned partnumber

*/





        console.log("this is the upc" + upc)
        console.log("this is the typeof upc" + typeof upc)
      upc=upc.trim()
      console.log("this is the upc trimmed" + upc)
      
        upc= upc.substr(6);
      console.log("this is the typeof upc" + typeof upc)
      console.log("this is the truncated upc "+ upc)
       console.log("this is the truncated upc length"+ upc.length)
       if (upc.length>0)
       {
      upc=Number(upc)
      console.log("this is the upc converted to a number " + upc)
    // I should return the object as oppose to just the description
    //
     
      var color=Colors.find({Suffix:upc}).fetch().pop()
     console.log("this is the color "+ color)
     console.log("this is the color desc " + color.Description)
     console.log("this is the typeof color "+typeof color)
     
        if (Colors.find({Suffix:upc}).count()>0)
        {
        return Colors.find({Suffix:upc}).fetch().pop()
        }
 }

}catch(err)
{

}


        },
 color2: function (partnumber) {
      
      //so I will use the partnumber to find a upc associated with this partnumber
      //then I will go through the database and find an object that is associated
      //with the upc




      try{

        if (Upcs.find({partnumber:partnumber}).count()>=1)
      {
     
        var upc=Upcs.find({partnumber:partnumber}).fetch().pop().upc
    
      }





      upc=upc.trim()
        upc= upc.substr(6);
    
      upc=Number(upc)
    // I should return the object as oppose to just the description
    //
     
      var color=Colors.find({Suffix:upc}).fetch().pop()
     
    
        return Colors.find({Suffix:upc}).fetch().pop()

}catch(err)
{

}


        },       
 
  datahistory: function () {
   var start=moment().format("YYYY-MM-DD 05:00:00.000")
       var count=Dataentries.find({timestamp: {$gte: start}})
       console.log("test")
 return count



  },
  dataentriesOperators: function()
  {

var distinctEntries = _.uniq(Dataentries.find({}, {
    sort: {name: 1}, fields: {name: true}
}).fetch().map(function(x) {
    return x.name;
}), true);
console.log("type of distinctentries "+ typeof distinctEntries)
return distinctEntries
  },  
    dataentriesWorkcenters: function(name)
  {
 var distinctEntries = _.uniq(Dataentries.find({name:name}, {sort: {workcenter:1}, fields: {workcenter:true}}).fetch().map(function(x) {
 return x.workcenter;
 }), true);
 return distinctEntries;
  },     
 dailydatacount: function () {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
//{timestamp: {$gte: timestamp}
        var start=moment().format("YYYY-MM-DD 04:00:00.000")
        console.log("this is the date in daily count"+ start)
       var count=Dataentries.find({timestamp: {$gte: start}}).count()
       console.log("this is the count of data entries today " + count)
      
      return count

}catch(err)
{
  console.log("this is the error " + err)
}


        },
 weeklydatacount: function () {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
//{timestamp: {$gte: timestamp}
//I need to get since the start of the week
var firstDay = moment().startOf('week').format('dddd') === 'Sunday' ?     
moment().startOf('week').add('d',1).format('YYYY-MM-DD 01:00:00.000') : 
moment().startOf('week').format('YYYY-MM-DD 01:00:00.000');
        var start=moment().format("YYYY-MM-DD 02:00:00.000")
       var count=Dataentries.find({timestamp: {$gte: firstDay}}).count()
       console.log("this is the count of weekly entries today " + count)
      
      return count

}catch(err)
{
  console.log("this is the error " + err)
}


        },
                         
 averageworkcenter: function (workcenter,start,end) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
          start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")
        //This should take in a work center
        console.log("this is the workcenter "+ workcenter)
        workcenter=workcenter.toString()
       workcenter = workcenter.replace(/\D/g,'');
       console.log("this is the workcenter "+ workcenter)
      /*  var string="/"
        string=string.concat(workcenter)
        string=string.concat("/")*/
    
        //count the amount of entries for each shift basically 
        //I must do a regex for the workcenter
      var shift1count=0
      var shift2count=0
      var shift3count=0
     

    

    
       var totalshift1=0;
        var totalshift2=0;
         var totalshift3=0;

       //var totalpermanent=0;
       
      var total = 0;

Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 1",date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
  shift1count=shift1count+1
  totalshift1 += doc.productivity;
});
Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 2",date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
  shift2count=shift2count+1
  totalshift2 += doc.productivity;
});
Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 3",date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
  shift3count=shift3count+1
  totalshift3 += doc.productivity;
});
console.log("this is the total shift 1 "+ totalshift1)
if(totalshift1!=0 &&shift1count!=0)
{
var shift1avg=totalshift1/shift1count
shift1avg=shift1avg.toFixed(2)
shift1avg=Number(shift1avg)
}
else
{
  shift1avg=Number(0)
}
console.log("this is the shift1 avg " + shift1avg)
if(totalshift2!=0 &&shift2count!=0)
{
var shift2avg=totalshift2/shift2count
shift2avg=shift2avg.toFixed(2)
shift2avg=Number(shift2avg)
}
else
{
  shift2avg=Number(0)
}
if(totalshift3!=0 &&shift3count!=0)
{
var shift3avg=totalshift3/shift3count
shift3avg=shift3avg.toFixed(2)
shift3avg=Number(shift3avg)
}
else
{
  shift3avg=Number(0)
}

//console.log("this is the temp total in base average" + totaltemp)

var avgarray=[]
avgarray.push(shift1avg)
avgarray.push(shift2avg)
avgarray.push(shift3avg)

console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray

}catch(err)
{
  console.log("this is the error " + err)
}


        },
averageallworkcenter: function (department,start,end) {
        
      try{

        //This should take in a work center
       
      /*
        Basically type all the work centers here

      */
   
start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")
 var testarray=[]
 var testarraynames=[]
 var test=null
 var testname=null

/*
Here I am counting all the Datacenters for a particular department

*/


   //var depcount=Datacenters.find({department: { $regex: department }}).count()
/*
Efficiently find all the workcenters for a particular department


*/



Datacenters.find({department: { $regex: department }}).map(function(doc) {
  
 /*
Since this function goes through all the data centers with a particular department,
it is already looping through each workcenter,date: {$gte: start,$lte:end}
 */

//var count=Dataentries.find({workcenter: { $regex: test }}).count()
//I can count all the dataentries using a map function
  var test=doc.workcenter
  testname=test.toString()
  var workcentercount=0
     var total=0
console.log("this is the start "+ start)
console.log("this is the end "+ end)
//console.log("this is the count "+ Dataentries.find({workcenter: { $regex: test },date: {$gte: start,$lte:end}}).count())
 
 Dataentries.find({workcenter: { $regex: test },date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {

//console.log("inside the data entries")
//console.log("this is the workcenter "+ test)
  total += doc.productivity;
//  console.log("this is the current total " + total)
workcentercount=workcentercount+1

});
if(total>0&&workcentercount>0)
    {
    var avg=total/workcentercount
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }

  //  console.log("this is the total " + total)
   // console.log("this is the avg "+ avg)
    testarray.push([testname,avg])
  //  console.log('this is the  array test'+ testarray[0][1])







});

/*
Basically it is grabbing all the workcenters for a particular department
then is is counting the entries for each work center and the total productivity
then determining the average for the particular work center and add this to 
an array with the workcenter name and average


*/
/*
   for (var i=0; i<depcount;i++)
   {
    var total=0
    test=Datacenters.find({department: { $regex: department }},{sort: {timestamp: 1}, limit: i}).fetch().pop().workcenter
    testname=test.toString()
    console.log("This is the testname " + testname)
    console.log('this is the test '+ test)
    var count=Dataentries.find({workcenter: { $regex: test }}).count()
    Dataentries.find({workcenter: { $regex: test }}).map(function(doc) {
  total += doc.productivity;
});
    if(total>0&&count>0)
    {
    var avg=total/count
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }
    console.log("this is the total " + total)
    console.log("this is the avg "+ avg)
    testarray.push([testname,avg])
    console.log('this is the  array test'+ testarray[0][1])
    
      
   }
   */
return testarray

  /*
 var tempcount=0;
       var permanentcount=0;
      var totaltemp=0;
       var totalpermanent=0;
       
      var total = 0;
//add timestamp gte and lte
//
Dataentries.find({employeestatus:"temp", department:department, timestamp: {$gte: start,$lte:end}}).map(function(doc) {
   tempcount=tempcount+1
  totaltemp += doc.productivity;
});
Dataentries.find({employeestatus:"permanent", department:department, timestamp: {$gte: start,$lte:end}}).map(function(doc) {
 permanentcount=permanentcount+1
  totalpermanent += doc.productivity;
});
if(totaltemp!=0 &&tempcount!=0)
{
var tempavg=totaltemp/tempcount
tempavg=tempavg.toFixed(2)
tempavg=Number(tempavg)
}
else
{
  tempavg=Number(0)
}
if(totalpermanent!=0 &&permanentcount!=0)
{
var permanentavg=totalpermanent/permanentcount
permanentavg=permanentavg.toFixed(2)
permanentavg=Number(permanentavg)
}
else
{
  permanentavg=Number(0)
}
//console.log("this is the temp total in base average" + totaltemp)
console.log("This is the total using map "+ totaltemp)
console.log("This is the total using map "+ totalpermanent)
console.log("this is the tempavg "+tempavg + " permavg " +permanentavg)
var avgarray=[]
avgarray.push(tempavg)
avgarray.push(permanentavg)

console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray


*/



}catch(err)
{
  console.log("this is the error " + err)
}


        },
rowremoval: function (id) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
        console.log("this is the id "+id)
        console.log("amount of db entries " + Dataentries.find({_id:id}).count())
       Dataentries.remove({_id: id});

}catch(err)
{
  console.log("this is the error " + err)
}


        },

averageallopworkcenters: function (operator,start,end) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        //This should take in a work center
       
      /*
        Basically type all the work centers here

      */
console.log("in the average all op workcenter fxn")
  
 start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")

  var testarray=[]
     var testname=null
    

    var distinctEntries = _.uniq(Dataentries.find({name:operator}, {sort: {workcenter:1}, fields: {workcenter:true}}).fetch().map(function(x) {
 return x.workcenter;
 }), true);
/*
I need to find only the workcenters that this user has data for
*/

  console.log("this is the number of datacenters "+ distinctEntries.length)
 console.log("this is datacenters slot one " + distinctEntries[0])
 
   for (var i=0;i<distinctEntries.length;i++)
    {
     var total=0
   
             var count=0
        console.log("this is the count " + count+ " this is the workcenter " + distinctEntries[i])
    Dataentries.find({workcenter: distinctEntries[i],name:operator,date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
  total += doc.productivity;
  count+=1

});
    if(total>0&&count>0)
    {
    var avg=total/count
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }

       testarray.push([distinctEntries[i],avg])




          }

     
    return testarray
  
    
   







}catch(err)
{
  console.log("this is the error " + err)
}


        },       
averagesingleworkcenter: function (workcenter,operator,start,end) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        //This should take in a work center
       
      /*
        Basically type all the work centers here

      */
   console.log("this is the workcetner "+ workcenter)

  var testarray=[]
     var testname=null
    
var count1=0

 
  
     var total=0
    start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")
           
    Dataentries.find({workcenter: { $regex: workcenter },name:operator,date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
      count1+=1
  total += doc.productivity;
});
    console.log("this is the count "+ count1 ) 
    if(total>0&&count1>0)
    {
    var avg=total/count1
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }

       testarray.push([workcenter,avg])




          


  
        
    /*
  So now I need to do the same thing but for all the permanent for this work center

  */
   var count2=0

    Dataentries.find({workcenter: { $regex: workcenter }, employeestatus: "permanent",date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
   count2+=1
  total += doc.productivity;
});
    console.log("this is the count 2"+ count2)
    if(total>0&&count2>0)
    {
    var avg=total/count2
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }
 testarray.push([workcenter,avg])







return testarray




}catch(err)
{
  console.log("this is the error " + err)
}


        },


averageopworkcenter: function (operator,start,end) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        //This should take in a work center
       
      /*
        Basically type all the work centers here

      */

   start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")
  var count=0;
 var testarray=[]
 
 var test=operator

    var total=0
  var total2=0
    
  //  var count=Dataentries.find({name: { $regex: operator }}).count()
    console.log("this is the operator " + operator)
   // console.log("this is the count "+ count)
    Dataentries.find({name: { $regex: operator },date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
  total += doc.productivity;
  count+=1;
});
    if(total>0&&count>0)
    {
    var avg=total/count
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }
    console.log("this is the total " + total)
    console.log("this is the avg "+ avg)
    testarray.push([test,avg])
    console.log('this is the  array test'+ testarray[0][1])
        
    /*
  So now I need to do the same thing but for all the permanent for this work center

  */
   var test="Permanent"
var count2=Dataentries.find({employeestatus: "permanent"}).count()
    console.log("this is the count permanent "+ count2)
    
      Dataentries.find({employeestatus: "permanent"}, { productivity : 1, name: 1 }).map(function(doc) {
       
        if(isNaN(doc.productivity)==false && isNaN(total2)==false)
        {
         
  total2 += Number(doc.productivity);
}
  else if (isNaN(doc.productivity)==true)
  {
    var record=doc._id
    console.log("incorrect record "+ record)
    console.log("name " + doc.name)
    console.log("prod " + doc.productivity)
  }

  
  

});
    console.log("this is the total of permanent "+ total2)
    if(total2>0&&count>0)
    {
    var avg=total2/count2
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }
  console.log("This is the avg "+ avg)
 testarray.push([test,avg])




return testarray

 

}catch(err)
{
  console.log("this is the error " + err)
}


        },

average: function (department, start, end) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
        console.log("this is the department "+ department)
        start=moment(start).format("YYYY-MM-DD")

   end=moment(end).format("YYYY-MM-DD")
      var tempcount=0;
       var permanentcount=0;
      var totaltemp=0;
       var totalpermanent=0;
       
      var total = 0;
//add timestamp gte and lte
//

Dataentries.find({employeestatus:"temp", department:department, date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
   tempcount=tempcount+1
  totaltemp += doc.productivity;
});
Dataentries.find({employeestatus:"permanent", department:department, date: {$gte: start,$lte:end}}, { productivity : 1 }).map(function(doc) {
 permanentcount=permanentcount+1
  totalpermanent += doc.productivity;
});
if(totaltemp!=0 &&tempcount!=0)
{
var tempavg=totaltemp/tempcount
tempavg=tempavg.toFixed(2)
tempavg=Number(tempavg)
}
else
{
  tempavg=Number(0)
}
if(totalpermanent!=0 &&permanentcount!=0)
{
var permanentavg=totalpermanent/permanentcount
permanentavg=permanentavg.toFixed(2)
permanentavg=Number(permanentavg)
}
else
{
  permanentavg=Number(0)
}
//console.log("this is the temp total in base average" + totaltemp)
console.log("This is the total using map "+ totaltemp)
console.log("This is the total using map "+ totalpermanent)
console.log("this is the tempavg "+tempavg + " permavg " +permanentavg)
var avgarray=[]
avgarray.push(tempavg)
avgarray.push(permanentavg)

console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray
}catch(err)
{
  console.log("this is the error " + err)
}


        },

 missingPartnumber: function () {
          
          var count=0
            var parts=[]

        /*  Kanbans.find({}).map(function(doc) {
         var partnumber=doc.partnumber
            if(Upcs.find({partnumber:partnumber}).count()<1)
            {
                console.log("no partnumber for " +doc.partnumber)
                parts.push(doc.partnumber)
            }





});*/
         Partnumbers.find({}).map(function(doc) {
 var partnumber=doc.partnumber
            if(typeof Upcs.findOne({partnumber:partnumber})=="undefined")
            {
                console.log("no partnumber for " +partnumber)
                parts.push(partnumber)
            }

       

     
        });

       console.log("done")
//for (var)
      
           return parts
          


        },
  getServerTime: function () {
            var _time = moment().format("YYYY-MM-DD HH:mm:ss.SSS")
            //console.log(_time);
            return _time;
        },
     dataTable: function (count,removed) {
           console.log("this is the type of data server " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}))
       console.log("table array " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}).fetch())
       return Dataentries.find({},{sort: {timestamp: -1}, limit: 5}).fetch()


        },
        dataHistory: function (start) {
           //console.log("this is the type of data server " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}))
      // console.log("table array " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}).fetch())
       return Dataentries.find({timestamp: {$gte: start}}).fetch()


        },
        dataSearch: function (name) {

           //console.log("this is the type of data server " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}))
      // console.log("table array " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}).fetch())
       return  Dataentries.find({ name: {$regex: name, $options: 'i'} }).fetch()


        },
        scanOutput: function (name,start,end) {
          
           //console.log("this is the type of data server " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}))
      // console.log("table array " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}).fetch())
       if (name==null)
    {
console.log("the session is null ")

  if (Scans.find({timestamp: {$gte: start, $lt:end}}).count()>0)
  {
    //test out returning a toast
    return Scans.find({timestamp: {$gte: start, $lt:end}}).fetch()
  }

    }
else
{

  if (Scans.find({ partnumber: {$regex: name, $options: 'i'},timestamp: {$gte: start, $lt:end} }).count()>0)
      {

      //test out returning a toast
      return Scans.find({ partnumber: {$regex: name, $options: 'i'},timestamp: {$gte: start, $lt:end} }).fetch()
    }

    } 





        },
        operatorSearch: function () {
          console.log("this is the result on server " + typeof Dataentries.distinct('name'))
 return Dataentries.distinct('name');
        

        },
        partTable: function () {
           
           //   I need to use a for loop and go through every upc 

var count=0
//var depcount=Datacenters.find({department: { $regex: department }}).count()
                Upcs.find({}).map(function(doc) {
  count=count+1
});
console.log("this is the count "+ count)
       /*         for (var i=0; i<depcount;i++)
   {
    var total=0
    test=Datacenters.find({department: { $regex: department }},{sort: {timestamp: 1}, limit: i}).fetch().pop().workcenter
    testname=test.toString()
    console.log("This is the testname " + testname)
    console.log('this is the test '+ test)
    var count=Dataentries.find({workcenter: { $regex: test }}).count()
    Dataentries.find({workcenter: { $regex: test }}).map(function(doc) {
  total += doc.productivity;
});
    if(total>0&&count>0)
    {
    var avg=total/count
    avg=avg.toFixed(2)
    avg=Number(avg)
  }
  else
  {
    avg=0;
  }
    console.log("this is the total " + total)
    console.log("this is the avg "+ avg)
    testarray.push([testname,avg])
    console.log('this is the  array test'+ testarray[0][1])
    //console.log("this is the test dep "+ testarray[i] )
    //Here I will need to determine the average
   
    
   }
 */ 
         
        //return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})


        }     


});