
exports.up = function(knex) {
  return knex.schema.createTable('projects', projects => {
    projects.increments();
    projects
      .string('name', 255)
      .notNullable();
    projects
      .string('description', 255)
    projects
      .boolean('completed')
      .notNullable()
      .defaultTo(0)
  })
  .createTable('resources', resources => {
    resources.increments();
    resources
      .string('Name', 255)
      .notNullable();
    resources
      .string('description', 255)
  })
  .createTable('project_resources', project_resources => {
    project_resources.increments();
    project_resources
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    project_resources
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
  .createTable('tasks', tasks => {
    tasks.increments();
    tasks
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tasks
      .integer('task_number')
      .unsigned()
      .notNullable();
    tasks
      .string('description', 255)
      .notNullable()
    tasks
      .string('notes', 255)
    tasks
      .boolean('completed')
      .notNullable()
      .defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
