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

function addProject() {
  return db('resources')
}

function findResources() {
  return db('resources')
}

function addResource() {
  return db('resources')
}

function findTasks() {
  return db('tasks')
}

function addTask() {
  return db('resources')
}