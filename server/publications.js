//File that publishes all the databases used


Meteor.publish('scans', function() {
  return Scans.find();
});

//ReactiveTable.publish("scans", Scans);

Meteor.publish('datacenters', function() {
  return Datacenters.find();
});

Meteor.publish('dataentries', function() {
  return Dataentries.find();
});
/*
Meteor.publish('scans-table', function (start, end, name) {

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
});
*/
Meteor.publish('kanbanstest', function() {
  return Dataentries.find();
});