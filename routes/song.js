var express = require('express');
var router = express.Router();
const{createSong, getAllSongs} = require('../controllers/song');
const{isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const{getUserById} = require('../controllers/user')
const{getSongById} = require('../controllers/song')

//params
router.param("userId", getUserById);
router.param("songId", getSongById);

//create song route
router.post("/song/create/:userId",isSignedIn, isAuthenticated, isAdmin, createSong);
router.get("/songs", isSignedIn, getAllSongs);
module.exports = router