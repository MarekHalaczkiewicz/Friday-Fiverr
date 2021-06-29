require('dotenv').config();
const db = require('../_helpers/db-config');
const Project = db.Project;

module.exports = {
  findAndUpdate,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Project.find();
}

async function findAndUpdate(projectId, projectParam) {
  const { userId, amount } = projectParam;
  const updatedProject = await Project.findOneAndUpdate(
    { _id: projectId },
    { $push: { contributors: { userId, amount } } },
    // { title: 'King in the North' },
    // If `new` isn't true, `findOneAndUpdate()` will return the
    // document as it was _before_ it was updated.
    { new: true }
  );
  return await updatedProject;
}

async function getById(id) {
  return await Project.findById(id);
}

async function create(projectParam) {
  const project = new Project(projectParam);

  // save project
  await project.save();
}

async function update(id, projectParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw 'User not found';
  if (
    user.username !== projectParam.username &&
    (await User.findOne({ username: projectParam.username }))
  ) {
    throw 'Username "' + projectParam.username + '" is already taken';
  }

  // hash password if it was entered
  if (projectParam.password) {
    projectParam.hash = bcrypt.hashSync(projectParam.password, 10);
  }

  // copy projectParam properties to user
  Object.assign(user, projectParam);

  await user.save();
}

async function _delete(id) {
  await Project.findByIdAndRemove(id);
}
