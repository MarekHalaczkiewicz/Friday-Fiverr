require('dotenv').config();
const db = require('../_helpers/db-config');
const Project = db.Project;

module.exports = {
  findAndUpdate,
  findAndUpdateOrg,
  getAll,
  getById,
  create,
  update,
  uploadVideo,
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

async function findAndUpdateOrg(projectId, projectParam) {
  const { name, profileURL, skillset, pitch, userId, videoURL } = projectParam;
  const updatedProject = await Project.findOneAndUpdate(
    { _id: projectId },
    {
      $push: {
        contractor: { name, profileURL, skillset, pitch, userId, videoURL },
      },
    },
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
  const id = project.id;
  // save project
  await project.save();
  return id;
}

async function uploadVideo(req) {
  // console.log(req.file); // see what got uploaded

  let uploadLocation = __dirname + '/public/' + req.file.originalname; // where to save the file to. make sure the incoming name has a .wav extension

  await fs.writeFileSync(
    uploadLocation,
    Buffer.from(new Uint8Array(req.file.buffer))
  ); // write the blob to the server as a file

  return uploadLocation;
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
