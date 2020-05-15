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

function findResources() {
  return db('resources')
}

function findTasks() {
  return db('tasks')
}