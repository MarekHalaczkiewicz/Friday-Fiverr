const express = require('express');
const projectController = require('../controllers/project-controller');
const projectRouter = express.Router();

// routes
projectRouter.post('/register', projectController.register);
projectRouter.get('/', projectController.getAll);
projectRouter.get('/current', projectController.getCurrent);
projectRouter.get('/:id', projectController.getById);
projectRouter.put('/:id', projectController.update);
projectRouter.delete('/:id', projectController._delete);

module.exports = projectRouter;