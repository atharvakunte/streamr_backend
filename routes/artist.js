var express = require('express');
var router = express.Router();
const {createArtist} = require('../controllers/artist')
const{isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const{getUserById} = require('../controllers/user');

//params
router.param("userId", getUserById);

//routes
router.post("/artist/create/:userId",isSignedIn, isAuthenticated, isAdmin, createArtist);
