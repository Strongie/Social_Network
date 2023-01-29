const { Schema, Types } = require('mongoose');
const reactionsSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
     thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: [{
      type: Schema.Types.ObjectId,
      required: true,
    },
    ],
    reactions: [reactionsSchema],
    });

module.exports = thoughtSchema