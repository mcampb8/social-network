const { User, Thought } = require('../models');

module.exports = {
  //Get All Thoughts
    getThoughts(req,res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    //Get one Thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      //Create a Thought
      postThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
      //Update a Thought
    updateThought(req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
          )
            .then((updatedThought) =>
              !updatedThought
                ? res.status(404).json({ message: 'No Thought with this id!' })
                : res.json(updatedThought)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            })
    },
    //Delete a Thought
    deleteThought(req,res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((deletedThought) =>
          !deletedThought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(deletedThought)
        )
        .catch((err) => {
            console.log(err);
        res.status(500).json(err)});
    },
    //Create a Reaction
    createReaction (req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
          )
            .then((updatedThought) =>
              !updatedThought
                ? res.status(404).json({ message: 'No Thought with this id!' })
                : res.json(updatedThought)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            })
    },
    //Delete a Reaction
    deleteReaction (req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.body }},
          )
            .then((updatedThought) =>
              !updatedThought
                ? res.status(404).json({ message: 'No Thought with this id!' })
                : res.json(updatedThought)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            })
    }
}