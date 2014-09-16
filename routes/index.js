var express = require('express');
var router = express.Router();

var grabAvatar = process.env.GRAB_AVATAR;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', grabAvatar: grabAvatar });
});

module.exports = router;
