// const express = require('express');
// const router = express.Router();
const userService = require('../services/user-services');

// // routes
// router.post('/authenticate', authenticate);
// router.post('/register', register);
// router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

// module.exports = router;

module.exports.authenticate = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: 'Username or password is incorrect' })
    )
    .catch((err) => next(err));
};

module.exports.register = (req, res, next) => {
  userService
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
};

module.exports.getAll = (req, res, next) => {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

module.exports.getCurrent = (req, res, next) => {
  userService
    .getById(req.user.sub)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
};

module.exports.getById = (req, res, next) => {
  userService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
};

module.exports.update = (req, res, next) => {
  userService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
};

module.exports._delete = (req, res, next) => {
  userService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
};
