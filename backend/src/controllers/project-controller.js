const projectService = require('../services/project-services');

// // routes

// router.post('/register', register);
// router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

// module.exports = router;


module.exports.register = (req, res, next) => {
  projectService
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
};

module.exports.getAll = (req, res, next) => {
  projectService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

module.exports.getCurrent = (req, res, next) => {
  projectService
    .getById(req.user.sub)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
};

module.exports.getById = (req, res, next) => {
  projectService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
};

module.exports.update = (req, res, next) => {
  projectService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
};

module.exports._delete = (req, res, next) => {
  projectService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
};
