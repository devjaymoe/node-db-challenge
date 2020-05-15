const db = require('../data/db-config.js');

module.exports = {
  findResources,
  addResource,
  findProjects,
  addProject,
  findTasks,
  addTask
}

function findProjects() {
  return db('projects')
}

function addProject(data) {
  return db('projects')
    .insert(data)
    .then(ids => {
      return db('projects').where('id', ids[0]).first();
    })
}

function findResources() {
  return db('resources')
}

function addResource(data) {
  return db('resources')
    .insert(data)
    .then(ids => {
      return db('resources').where('id', ids[0]).first();
    })
}

function findTasks() {
  return db('tasks')
}

function addTask(data) {
  return db('tasks')
    .insert(data)
    .then(ids => {
      return db('tasks').where('id', ids[0]).first();
    })
}