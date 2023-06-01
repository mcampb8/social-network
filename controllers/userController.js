const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
      getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((deletedUser) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(deletedUser)
          )
          .then(() => res.json({ message: 'User and associated apps deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
      updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
    )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(updatedUser)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })},
      addFriend(req, res){
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } }
        )
          .then((updatedUser) =>
            !updatedUser
              ? res.status(404).json({ message: 'No User with this id!' })
              : res.json(updatedUser)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          })
      },
      removeFriend(req, res){
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } }
        )
          .then((updatedUser) =>
            !updatedUser
              ? res.status(404).json({ message: 'No User with this id!' })
              : res.json(updatedUser)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          })
      }
    }
      