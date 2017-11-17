'use strict';

model.exports = function(app) {
  var todoList = require('../controllers/todoListController')

//todoList Routes

app.route('/tasks')
   .get(todoList.list_all_tasks)
   .post(todoList.create_a_task);

app.route('/tasks/:taskID')
   .get(todoList.read_a_task)
   .put(todoList.update_a_task)
   .post(todoList.create_a_task);

 };
