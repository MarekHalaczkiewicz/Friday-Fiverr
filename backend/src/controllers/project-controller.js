const projectService = require('../services/project-services');

module.exports.register = (req, res, next) => {
  projectService
    .create(req.body)
    .then((id) => res.json({ id }))
    .catch((err) => next(err));
};

module.exports.getAll = (req, res, next) => {
  projectService
    .getAll()
    .then((project) => res.json(project))
    .catch((err) => next(err));
};

module.exports.findAndUpdate = (req, res, next) => {
  projectService
    .findAndUpdate(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

module.exports.findAndUpdateOrg = (req, res, next) => {
  projectService
    .findAndUpdateOrg(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

// module.exports.getCurrent = (req, res, next) => {
//   projectService
//     .getById(req.user.sub)
//     .then((user) => (user ? res.json(user) : res.sendStatus(404)))
//     .catch((err) => next(err));
// };

module.exports.getById = (req, res, next) => {
  projectService
    .getById(req.params.id)
    .then((project) => (project ? res.json(project) : res.sendStatus(404)))
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

module.exports.uploadVideo = (req, res, next) => {
  projectService
    .uploadVideo(req)
    .then((location) => res.json({ location }))
    .catch((err) => next(err));
};
