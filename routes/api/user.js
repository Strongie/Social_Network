const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/thoughtId/:friend
router
.route('/:userId/friendId')
.post(createFriend);

// /api/thoughtId/friend/:friendId
router
.route('/:userId/friend/:friendId')
.delete(deleteFriend);

module.exports = router;