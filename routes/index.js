var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {
        title: 'Collections'
    }
    if (req.cookies.loggedin == true) {
        // to admin page
    } else {
        res.render('login', data);
    }
});

router.post('/login', function (req, res, next) {
    res.set({'Content-Type': 'text/json'});
    res.json({res:'pfft'});
});

module.exports = router;
