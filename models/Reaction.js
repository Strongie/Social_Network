const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
  {
     reactionId: {
            type: Schema.Types.ObjectId,
            required: true,
          },
     reactionBody: {
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
      type: String,
      required: true,
    },
    ],
        });

module.exports = reactionSchema