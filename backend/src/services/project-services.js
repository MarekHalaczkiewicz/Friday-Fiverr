require('dotenv').config();
const db = require('../_helpers/db-config');
const Project = db.Project;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Project.find();
}

async function getById(id) {
  return await Project.findById(id);
}

async function create(projectParam) {
  // validate
  if (await Project.findOne({ username: projectParam.username })) {
    throw 'Username "' + projectParam.username + '" is already taken';
  }

  const user = new User(projectParam);

  // hash password
  if (projectParam.password) {
    user.hash = bcrypt.hashSync(projectParam.password, 10);
  }

  // save user
  await user.save();
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
  await User.findByIdAndRemove(id);
}