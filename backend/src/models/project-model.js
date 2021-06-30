const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: [
    {
      type: String,
      required: true,
    },
  ],
  goal: {
    type: Number,
    required: true,
  },
  contributors: [
    {
      userId: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  location: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  organization: {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
    },
    account: {
      type: String,
    },
  },
  contractor: {
    name: {
      type: String,
      required: false,
    },
    profileURL: {
      type: String,
      required: false,
    },
    skillset: {
      type: String,
      required: false,
    },
    pitch: {
      type: String,
      required: false,
    },
  },
  createdDate: { type: Date, default: Date.now },
});

// schema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//     delete ret.hash;
//   },
// });

module.exports = mongoose.model('Project', schema);
