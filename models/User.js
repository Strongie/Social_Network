const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
     userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    },
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      ],
    });

module.exports = userSchema