import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');
 if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({});
  });
}
Tasks.allow({
    insert: function (userId, doc) {
           return true;
        },
    
    update: function (userId, doc, fieldNames, modifier) {
           return true;
        },
    
    remove: function (userId, doc) {
           return true;
        }
    
});
Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    
 	console.log("This is the text " + text)
    Tasks.insert({
      text,
      createdAt: new Date()

    });
  },
  'tasks.remove'(taskId) {
  	console.log("trying to remove")
    check(taskId, String);
 	console.log("this is the taskId" + taskId)
    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
 
    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});