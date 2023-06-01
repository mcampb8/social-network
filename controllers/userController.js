const { User, Thought } = require('../models');

module.exports = {
  //Get All Users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
      //Get One User
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
      //Create a User
      createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      //Delete a User
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((deletedUser) =>
            !deletedUser
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(deletedUser)
          )
          .catch((err) => res.status(500).json(err));
      },
      //Update a User
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
      //Add a Friend to a User
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
      //Remove a Friend from a User
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
      