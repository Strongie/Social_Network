const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

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
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
        },
        id: false,
      
    });

module.exports = thoughtSchema