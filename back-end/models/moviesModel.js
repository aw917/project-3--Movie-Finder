// Model for movies in the db
const { Schema, model } = require('mongoose');

const moviesSchema = Schema({
    imdbID: { type: String, required: true },
    note: { type: String }
});

module.exports = model('MovieFavorites', moviesSchema);