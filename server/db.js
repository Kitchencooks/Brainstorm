var mongoose = require('mongoose');
var db = {};

//mongoose.connect('mongodb://localhost/brainstormer');
mongoose.connect('process.env.CUSTOMCONNSTR_MONGOLAB_URI');

var userModel = require('./users/user.server.model.js');
var commentModel = require('./comments/comment.server.model.js');
var ideaModel = require('./ideas/idea.server.model.js');
var roomModel = require('./rooms/room.server.model.js');
var interestModel = require('./interests/interest.server.model.js');
db.User = mongoose.model('User');
db.Comment = mongoose.model('Comment');
db.Idea = mongoose.model('Idea');
db.Room = mongoose.model('Room');
db.Interest = mongoose.model('Interest');

module.exports = db;
