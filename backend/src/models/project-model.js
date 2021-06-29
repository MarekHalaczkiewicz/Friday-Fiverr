const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: ObjectID
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  media: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
    contributors: [
        {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref:'User', 
              unique: true, 
              required: true
            }
        },
        {
            amount: {
              type: Number,
              unique: true, 
              required: true
            }
        }
    ],
  raised: {
    type: Number
  },
  skills: {
    type: String,
    required: true
  },
  location: [
    {
     altitude: {
      type: String
     },
     longitude: {
      type: String
     }
  }
  ],
  organization: {
    organizationName: {
      type: String,
      required: true
    },
    contact: {
      type: String,
    },
    account: {
      type: String
    }
  },

    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model('Project', schema);
