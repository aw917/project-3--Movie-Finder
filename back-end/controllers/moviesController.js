// =======================
// MAJOR VARIABLES
// =======================
const express = require('express');
const { Error, NativeError } = require('mongoose');
const { create } = require('../models/moviesModel.js');
const movies = express.Router();
const MovieFavorites = require('../models/moviesModel.js');
const router = express.Router();

// =======================
// RESTFUL ROUTES
// =======================
// INDEX
movies.get('/', async (req, res) => {
    try {
        // attempt to grab bookmarks
        const foundBookmark = await Bookmark.find({})
        res.status(200).json(foundBookmark)
    } catch(error) {
        // handle errors
        res.status(400).json(error);
    }
})

// CREATE
movies.post('/', async (req, res) => {
    try {
        const createdFavorite = await MovieFavorites.create(req.body)
        res.status(200).json(createdFavorite)
    } catch (error) {
        res.status(400).json(error)
    }
})


// DELETE
movies.delete('/:id', async (req, res) => {
    try {
        const deletedFavorite = await MovieFavorites.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedFavorite);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
})

// UPDATE
movies.put('/:id', async (req, res) => {
    try {
        const updatedFavorite = await MovieFavorites.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedFavorite);
    } catch (error) {
        res.status(400).json(NativeError)
    }
})

// SHOW
movies.get('/:id', async (req, res) => {
    try {
        const showFavorite = await MovieFavorites.findById(req.params.id)
        res.status(200).json(showFavorite)
    } catch (error) {
        res.status(400).json(NativeError)
    }
})

module.export = movies;
module.export = router;