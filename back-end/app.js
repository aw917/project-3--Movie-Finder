/*
1. Declare variables
2. Middleware
3. Mongoose
4. Port
*/

// ====================================
// 1. Declare variables
// ====================================
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const express = require('express');
const mongoose = require('mongoose');
const { Error, NativeError } = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;
// const moviesController = require('./controllers/moviesController');
const { create } = require('./models/moviesModel.js');
const MovieFavorites = require('./models/moviesModel.js');
const movies = express.Router();


// ====================================
// 2. Middleware
// ====================================
app.use(cors());
app.use(express.json());

// ====================================
// 3. Mongoose
// ====================================
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('error', (err) => {
    console.log(err.message);
})

mongoose.connection.on('disconected', () => {
    console.log('connection disconnected')
})

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// ====================================
// RESTful routes
// ====================================
app.use('/', movies);

// INDEX
movies.get('/favorites', async (req, res) => {
    try {
        const foundFavorites = await MovieFavorites.find({})
        res.status(200).json(foundFavorites)
    } catch(error) {
        res.status(400).json(error);
    }
})

// CREATE
movies.post('/favorites', async (req, res) => {
    try {
        const createdFavorite = await MovieFavorites.create(req.body)
        res.status(200).json(createdFavorite)
    } catch (error) {
        res.status(400).json(error)
    }
})


// DELETE
movies.delete('/favorites/:id', async (req, res) => {
    try {
        const deletedFavorite = await MovieFavorites.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedFavorite);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
})

// UPDATE
movies.put('/favorites/:id', async (req, res) => {
    try {
        const updatedFavorite = await MovieFavorites.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedFavorite);
    } catch (error) {
        res.status(400).json(NativeError)
    }
})

// SHOW
movies.get('/favorites/:id', async (req, res) => {
    try {
        const showFavorite = await MovieFavorites.findById(req.params.id)
        res.status(200).json(showFavorite)
    } catch (error) {
        res.status(400).json(NativeError)
    }
})

// ====================================
// 4. Port
// ====================================
// app.use('/favorites', moviesController);

app.listen(PORT, () => {
    console.log('its working on port ' + PORT)
});