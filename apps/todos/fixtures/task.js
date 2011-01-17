// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

  { "guid": "task-1",
    "description": "Build my first SproutCore app",
    "isDone": false },

  { "guid": "task-2",
    "description": "Build a really awesome SproutCore app",
    "isDone": false },

  { "guid": "task-3",
    "description": "Next, the world!",
    "isDone": false }

];

(function() {
  for(var i = 4; i < 50; i++) {
    var task =  { "guid": "task-" + i,
    "description": "Task " + i,
    "isDone": false };
    Todos.Task.FIXTURES[Todos.Task.FIXTURES.length] = task;
  }
}());
