/**
 * Created by tco on 30/01/17.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req, res) {
    res.send('user ' + req.params.id);
    console.log(res.headersSent);
});
