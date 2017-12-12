'use strict';
module.exports = function(app) {
  var todoList = require('./controller');
  var patientList = require('./patientController');
  var appController = require('./userController');
  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/patients')
  	.get(patientList.list_patients);

  app.route('/patients/:patientId')
    .get(patientList.read_a_patient);

  app.route('/user/:username')
    .get(appController.fetch_a_user)

  app.route('/user')
    .post(appController.create_user);

  app.route('/document/:id')
    .get(appController.list_summary_document);
    
   app.route('/document')
    .post(appController.new_document)

  app.route('/document/user/:username')
    .get(appController.list_summary_document_by_username)




}