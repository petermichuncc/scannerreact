Scans = new Mongo.Collection('scans');
Upcs = new Mongo.Collection('upcs');
Orders = new Mongo.Collection('orders');
Orderstest = new Mongo.Collection('orderstest');
Kanbans = new Mongo.Collection('kanbans');
Kanbanstest = new Mongo.Collection('kanbanstest');
Colors = new Mongo.Collection('colors');
Datacenters = new Mongo.Collection('datacenters');
Dataentries = new Mongo.Collection('dataentries');
Operators = new Mongo.Collection('operators');
Partnumbers = new Mongo.Collection('partnumbers');

if (Meteor.isServer) {
ReactiveTable.publish("scans-table", Scans);
}
/*
var Schemas = {};


Schemas.Dataentries = new SimpleSchema({
    name: {
        type: String,
        label: "name"
        
    },
    date: {
        type: String,
        label: "date"
    },
    employeestatus: {
        type: String,
        label: "employeestatus"
    },
    department: {
        type: String,
        label: "department"
    },
    workcenter: {
        type: String,
        label: "workcenter"
    },
    shift: {
        type: String,
        label: "shift"
    },
    planned: {
        type: Number,
        label: "planned",
        min: 0,
        decimal:true
    },
    actual: {
        type: Number,
        label: "actual",
        min: 0,
        decimal:true
       
    },
    productivity: {
        type: Number,
        label: "productivity",
        decimal:true
        
    },
    timestamp: {
        type: String,
        label: "timestamp"
        
    }
    
});
*/
/*
Dataentries.attachSchema(Schemas.Dataentries);
Dataentries.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
*/
/*
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

    */