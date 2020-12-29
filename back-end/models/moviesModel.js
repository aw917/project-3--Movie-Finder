// Model for movies in the db
const { Schema, model } = require('mongoose');

const moviesSchema = Schema({
    name: { type: String, required: true },
    celebrated: { type: Boolean, default: false },
    description: { type: String, default: 'Best holiday ever!' },
    likes: { type: Number, default: 0 },
    tags: [{ type: String }],
});

module.exports = model('Movie', moviesSchema);