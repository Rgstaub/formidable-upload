const mongoose = require("mongoose"),
Schema = mongoose.Schema

const postSchema = new Schema({
  id: Schema.Types.ObjectId,
  postedDate: Date,
  authorId: String,
  title: String, 
  text: String,
  photoPath: String, 
  comments: [{
    id: Schema.Types.ObjectId,
    authorId: String,
    postedDate: Date,
    text: String
  }]
})

var Post = mongoose.model("Post", postSchema);

module.exports = Post;