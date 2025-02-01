const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        //createdBy is the username of the person who submitted the comment
        createdBy: req.user.userName,
        //grabbing the user's id using req.user.id which is passing through passport which has all the information & in order to make a comment, a user has to be logged in
        createdById: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
   deleteComments: async (req, res) => {
      try {
        // Find comment by id
        // let comment = await Comment.findById({ _id: req.params.commentid });
        // Delete post from db
        await Comment.deleteOne({ _id: req.params.commentid });
        console.log("Comment deleted");
        res.redirect("/post/"+req.params.postid);
      } catch (err) {
        console.log(err)
      }
    }, 
};
