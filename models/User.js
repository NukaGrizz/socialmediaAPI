const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: 'Email address is required',
      unique: true,
      validate: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please fill in valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// get total count of comments and replies on retrieval
// PizzaSchema.virtual('freindCount').get(function() {
//   return this.freinds.reduce(
//     (total, comment) => total + comment.replies.length + 1,
//     0
//   );
// });

const User = model('User', UserSchema);

module.exports = User;
