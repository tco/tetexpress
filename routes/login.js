/**
 * Created by tco on 30/01/17.
 */
var express = require('express');
var router = express.Router();
var session = require('../util/session');


/* GET users listing. */
router.post('/', function(request, response, next) {
    console.log("Your password: "+request.body.user);
    console.log("Your username: "+request.body.pass);
    var sid = session.create(request.body.user);
    response.cookie('sid', sid, { httpOnly: true }).redirect('/game');
});


module.exports = router;

