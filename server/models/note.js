var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var notes = [
  {"id":1 ,"userId": 9, "categoryId": 8, "description": "Share Some Code", "content" : "Look at all of this code...", "title" : "My Code"},
  {"id":2 ,"userId": 2, "categoryId": 3, "description" : "What are Directives?", "title" : "Directives", "content": "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element."},
  {"id":3 ,"userId": 1, "categoryId": 6, "description" : "What is the answer to life the universe and everything?", "title" : "The Ultimate Question","content": "42"},
  {"id":4 ,"userId": 2, "categoryId": 6, "description" : "How awesome am I?", "title" : "How I Rank", "content": "Way Awesome"},
  {"id":5 ,"userId": 4, "categoryId": 6, "description" : "Question", "title" : "Question Title", "content": "Answer"},
  {"id":6 ,"userId": 5, "categoryId": 6, "description" : "Question", "title" : "Question Title", "content": "Answer"}
]
var lastId = 6;

var buildNotes = function() {
  // Make a deep copy so we don't change the main notes array
  var rawNotes = JSON.parse(JSON.stringify(notes));
  var builtNotes = [];
  var note;

  for(var i=0, l=rawNotes.length; i < l; i++) {
    note = rawNotes[i];
    note.user = User.get(note.userId);
    note.category = Category.get(note.categoryId);
    builtNotes.push(note);
  }
  return builtNotes
}

module.exports = {
  get: function(id) {
    return _.find(buildNotes(), function(note){
      return note.id === id;
    });
  },
  all: function() {
    return buildNotes();
  },
  update: function(note) {
    var updatedNote;
    for(var i=0, l=notes.length; i < l; i++) {
      if(notes[i].id === note.id){
        _.assign(notes[i], note);
        updatedNote = notes[i];
        break;
      }
    }
    return updatedNote;
  },
  delete: function(id) {
    var deletedNote;
    for(var i=0, l=notes.length; i < l; i++) {
      if(notes[i].id === id){
        deletedNote = notes[i];
        notes.splice(i, 1);
        break;
      }
    }
    return deletedNote;
  },
  create: function(note) {
    lastId += 1;
    note.id = lastId;
    notes.push(note)
    return note;
  }
}
