const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    cloudinaryId: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: String,
      ref: "User",
    },
    createdById: {
      type: mongoose.Schema.Types.ObjectId,
      //referencing the user model to pull our user id
      ref: "User"
    },
});

module.exports = mongoose.model("Favourite", FavouriteSchema);
