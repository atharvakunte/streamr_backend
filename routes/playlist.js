var express = require('express');
var router = express.Router();
const {createPlaylist} = require('../controllers/playlist')
const{isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const{getUserById} = require('../controllers/user');
const{getPlaylistById} = require('../controllers/playlist')

//params
router.param("userId", getUserById);
router.param("playlistId", getPlaylistById);

//routes

router.post("/playlist/create/:userId", isSignedIn, isAuthenticated, createPlaylist)

module.exports = router