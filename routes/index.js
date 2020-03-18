var express = require("express");
var router = express.Router();

let messages = [
  {
    user: "Frank",
    message: "First test message",
    time: new Date()
  },
  {
    user: "John",
    message: "Second test message",
    time: new Date()
  },
  {
    user: "Gizmo",
    message: "Final Test message",
    time: new Date()
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function(req, res) {
  res.render("form", { title: "Input Form" });
});

router.post("/new", function(req, res){
  let author = req.body.author;
  let msg = req.body.msg;
  messages.push({user: author, message: msg, time: new Date()});
  res.redirect('/')
})

module.exports = router;
