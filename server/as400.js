/*Update*/

var schedule = require('node-schedule');
var Interval = require('node-interval');

var date=moment().format("YYYY-MM-DD HH:mm:ss.SSS")

Meteor.setInterval(function () {

date=moment().format("YYYY-MM-DD HH:mm:ss.SSS")
//console.log("this is the date "+ date)



if (moment(date).hour()==1)
{
  console.log("running query one at 1 am")
 var response = Async.runSync(function(done) {
var db = require("odbc")()
    , cn = "DRIVER={Client Access ODBC Driver (32-bit)};SERVER=10.87.15.251;UID=CDATWATER;PWD=BabyGirl46;DATABASE=GCOVE; System=10.87.15.251;"
    ;
 
db.open(cn, function (err) {
    if (err) {
        return console.log(err);
    }
 
    //we now have an open connection to the database 
    //so lets get some data 
    


    db.query("SELECT CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DMFMOMR.MFMOMR03 ,  CCSDTACD.DCSDIM.ITMDESC FROM CCSDTACD.DMFMOMR,  CCSDTACD.DCSDIM, CCSDTACD.DMFMAPR WHERE CCSDTACD.DMFMAPR.PLT LIKE '%CD%' AND CCSDTACD.DMFMAPR.ORDNO = CCSDTACD.DMFMOMR.MFMOMR02 AND CCSDTACD.DMFMOMR.MFMOMR01 LIKE '%CD%' AND CCSDTACD.DMFMAPR.ITMID = CCSDTACD.DCSDIM.ITMID  GROUP BY CCSDTACD.DMFMOMR.MFMOMR03, CCSDTACD.DCSDIM.ITMDESC, CCSDTACD.DMFMAPR.ITMID", function (err, rows, moreResultSets) {
        if (err) {

            return console.log(err);
        }
       

   setTimeout(function() { 

    done(null, rows);
    
  }, 1000);

   if (err) {
       return console.error(err);
   }
   //console.log("here are the rows " + rows)
  
        //if moreResultSets is truthy, then this callback function will be called 
        //again with the next set of rows. 

    });//end of db query

})

});//end of async response

var rows=response.result
Orders.remove({ } )

rows.forEach( function (row){

var itemid=row['ITMID']
var partnumber=row['MFMOMR03']
var description=row['ITMDESC']

itemid=itemid.trim()
partnumber=partnumber.trim()
description=description.trim()

  Orders.insert({
                itemid:itemid,
               partnumber: partnumber,
               desc: description
                       
                  });
               

   });
 console.log("completed all row")


/*
This function will wait 15 minutes then run the 


*/

 console.log("running query two at 1 am")

var response = Async.runSync(function(done) {
var db = require("odbc")()
    , cn = "DRIVER={Client Access ODBC Driver (32-bit)};SERVER=10.87.15.251;UID=CDATWATER;PWD=BabyGirl46;DATABASE=GCOVE; System=10.87.15.251;"
    ;
 
db.open(cn, function (err) {
    if (err) {
        return console.log(err);
    }
 
    //we now have an open connection to the database 
    //so lets get some data 
    


    db.query("SELECT CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DCSDIM.ITMDESC,CCSDTACD.DMFPSMR.USGRAT,CCSDTACD.DCSDIM.MAJRTEID,CCSDTACD.DMFMOMR.MFMOMR03 FROM CCSDTACD.DMFPSMR, CCSDTACD.DCSDIM, CCSDTACD.DMFMAPR, CCSDTACD.DMFMOMR WHERE CCSDTACD.DMFMOMR.MFMOMR01 LIKE '%CD%' AND CCSDTACD.DMFMAPR.ORDNO = CCSDTACD.DMFMOMR.MFMOMR02  AND CCSDTACD.DCSDIM.MFGITMTYP LIKE '%K%' AND CCSDTACD.DCSDIM.ITMID = CCSDTACD.DMFMAPR.ITMID AND CCSDTACD.DCSDIM.PLT LIKE '%CD%'  AND CCSDTACD.DMFPSMR.ITMID = CCSDTACD.DMFMAPR.ITMID AND CCSDTACD.DMFPSMR.PLT LIKE '%CD%' AND CCSDTACD.DMFPSMR.PRTID  = CCSDTACD.DMFMAPR.PRTID GROUP BY CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DCSDIM.ITMDESC, CCSDTACD.DMFPSMR.USGRAT, CCSDTACD.DCSDIM.MAJRTEID, CCSDTACD.DMFMOMR.MFMOMR03", function (err, rows, moreResultSets) {
        if (err) {

            return console.log(err);
        }
       

   setTimeout(function() { 

    done(null, rows);
    
  }, 1000);

   if (err) {
       return console.error(err);
   }
   //console.log("here are the rows " + rows)
  
        //if moreResultSets is truthy, then this callback function will be called 
        //again with the next set of rows. 

    });//end of db query

})

});//end of async response

var rows=response.result
Kanbans.remove({ } )

rows.forEach( function (row){

var itemid=row['ITMID']
var partnumber=row['MFMOMR03']
var description=row['ITMDESC']
var usagerate=row['USGRAT']
var majorid=row['MAJRTEID']



itemid=itemid.trim()
partnumber=partnumber.trim()
description=description.trim()
//usagerate=usagerate.trim()
majorid=majorid.trim()

 Kanbans.insert({
                itemid:itemid,
               partnumber: partnumber,
               desc: description,
               usagerate: usagerate,
               majrid:majorid
                       
                  });
               

   });
 console.log("completed all row query two")












}//end of if statment that runs every 45 minutes to check if it is 1 am 

}, 2700000)//checks every 45 minutes