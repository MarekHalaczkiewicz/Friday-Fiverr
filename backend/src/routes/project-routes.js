const express = require('express');
const projectController = require('../controllers/project-controller');
const projectRouter = express.Router();
const multer = require('multer'); //use multer to upload blob data
const upload = multer(); // set multer to be the upload variable (just like express, see above ( include it, then use it/set it up))

// routes
projectRouter.post('/', projectController.register);
projectRouter.get('/', projectController.getAll);
// projectRouter.get('/current', projectController.getCurrent);
projectRouter.get('/:id', projectController.getById);
projectRouter.post('/:id/contribute', projectController.findAndUpdate);
projectRouter.post('/:id/subscribe', projectController.findAndUpdateContractor);
projectRouter.put('/:id', projectController.update);
projectRouter.put(
  '/:id/upload',
  upload.single('videoBlob'),
  projectController.uploadVideo
);
projectRouter.delete('/:id', projectController._delete);

module.exports = projectRouter;
