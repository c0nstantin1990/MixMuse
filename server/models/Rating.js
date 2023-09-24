  const mongoose = require("mongoose");
  const { Schema } = mongoose;
  
  const ratingSchema = new Schema({
    stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0,
      },
    comments: {
      type: String,
    },
  });
  
  const Rating = mongoose.model("Rating", ratingSchema);
  
  module.exports = Rating;