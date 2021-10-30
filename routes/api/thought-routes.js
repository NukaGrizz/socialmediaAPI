const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  addReaction,
  removeThought,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactions>
router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);


module.exports = router;
