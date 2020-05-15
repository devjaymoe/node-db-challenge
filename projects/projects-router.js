const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {

  Projects.findProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/resources', (req, res) => {

  Projects.findResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/tasks', (req, res) => {

  Projects.findTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// create recipe
// router.post('/', (req, res) => {
//   db('recipes').insert(req.body)
//   .then(ids => {
//     const id = ids[0];

//     db('recipes')
//       .where({ id })
//       .first()
//     .then(recipe => {
//       res.status(201).json(recipe);
//     });
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

// remove recipes
// router.delete('/:id', (req, res) => {
//   db('recipes')
//     .where({ id: req.params.id })
//     .del()
//   .then(count => {
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: 'Record not found' });
//     }
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

module.exports = router;