/**
 * Created by tco on 31/01/17.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    req.cookie.('username',req.body.user).send('cookie set');
    console.log(document.cookie);
});

