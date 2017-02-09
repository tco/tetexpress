/**
 * Created by tco on 31/01/17.
 */

var uuid = require('uuid');

var users = {};

var session = {
    create: function create(username) {
        var sid = uuid.v4();
        console.log(sid);
        users[sid] = {
            username: username
        };
        return sid;
    },
    getUser: function getUser(sid) {
        if(users[sid]) {
            return users[sid];
        }
        return false;
    }
};

module.exports = session;
