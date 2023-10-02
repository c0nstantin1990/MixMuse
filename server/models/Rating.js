  const mongoose = require("mongoose");
  const { Schema } = mongoose;
  
  const ratingSchema = new Schema({
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 1,
      },
    comments: {
      type: String,
    },
  });
  
  const Rating = mongoose.model("Rating", ratingSchema);
  
  module.exports = Rating;