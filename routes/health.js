
var express = require('express');
var router = express.Router();


// API's go here..

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('health', { title: 'Express' });
});

module.exports = router;