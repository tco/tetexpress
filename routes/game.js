/**
 * Created by tco on 30/01/17.
 */
var express = require('express');
var router = express.Router();
var session = require('../util/session');


/* GET home page. */
router.get('/', function(request, response) {
    var sid = request.cookies.sid;
    var user = session.getUser(sid);
    response.render('game', { username: user.username });
    console.log('Cookies:', user);

});

module.exports = router;


