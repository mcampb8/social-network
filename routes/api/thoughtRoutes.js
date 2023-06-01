const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/').get(getThoughts).post(postThought);
module.exports = router;