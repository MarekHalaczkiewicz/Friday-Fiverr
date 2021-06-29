const express = require('express');
const userController = require('../controllers/user-controller');
const userRouter = express.Router();

// routes
userRouter.post('/authenticate', userController.authenticate);
userRouter.post('/register', userController.register);
userRouter.get('/', userController.getAll);
userRouter.get('/current', userController.getCurrent);
userRouter.get('/:id', userController.getById);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController._delete);

module.exports = userRouter;
