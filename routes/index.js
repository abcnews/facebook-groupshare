var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.redirect(302, '/groupshare');
});

module.exports = router;