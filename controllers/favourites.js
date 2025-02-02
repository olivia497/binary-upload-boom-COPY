const Favourite = require("../models/Favourite");
// const Post = require("../models/Post");

module.exports = {
  getFavourites: async (req, res) => {
       try {
         const favourites = await Favourite.find().sort({ createdAt: "asc" }).lean();
         res.render("favourite.ejs", { favourites: favourites });
       } catch (err) {
         console.log(err);
         res.status(500).send("Server Error");
       }
     },
  deleteFavourites: async (req, res) => {
       try {
          await Favourite.deleteOne({ _id: req.params.favouriteid });
          console.log("Favourite deleted");
          res.redirect("/favourites");
       } catch (err) {
          console.log(err);
          //Ensures the error is no hanging and sends a response
          res.status(500).send("Server Error");
       }
     }, 
};