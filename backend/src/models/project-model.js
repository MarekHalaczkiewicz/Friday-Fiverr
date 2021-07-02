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
  video: {
    type: String,
  },
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
    type: String,
    required: true,
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
  contractor: [
    {
      name: {
        type: String,
      },
      skillset: {
        type: String,
      },
      videoURL: {
        type: String,
      },
      pitch: {
        type: String,
      },
      userId: {
        type: String,
      },
    },
  ],
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
