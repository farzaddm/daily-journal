const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//==========================================================================================

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static("public"));

// database
mongoose.connect("mongodb://localhost:27017/blogDB");

const postSchema = {
  title: String,
  content: String,
};

const Post = mongoose.model("Post", postSchema);

// Roures
app.get("/", (req, res) => {
  let posts = [];
  Post.find().then((data) => {
    data.forEach((d) => posts.push(d));

    res.render("home", {
      // startingContent: homeStartingContent,
      posts: posts,
    });
  });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  post.save();
  res.redirect("/");
});

app.get("/posts/:postName", async (req, res) => {
  const requestedTitle = req.params.postName;

  const post = await Post.findOne({ title: requestedTitle });
  res.render("post", {
    title: post.title,
    content: post.content,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
