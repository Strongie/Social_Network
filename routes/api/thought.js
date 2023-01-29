const router = require('express').Router();
const {
  getThougt,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thoughtId/:reactions
router
.route('/:thoughtId/reactions')
.post(createReactions);

// /api/thoughtId/reactions/:reactionsId
router
.route('/:thoughtId/reactions/:reactionsId')
.delete(deleteReactions);

module.exports = router;