var express = require('express');
var router = express.Router();

let messages = [
  {
    user: 'Frank',
    message: "testing 1 2 3"
  },
  {
    user: 'John',
    message: "still testing lol"
  },
  {
    user: 'Gizmo',
    message: "Old boy"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
