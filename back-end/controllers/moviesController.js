const express = require('express');
const { Error, NativeError } = require('mongoose');
const { create } = require('../models/moviesModel.js');
const movies = express.Router();
const Movie = require('../models/moviesModel.js');




module.export = movies;