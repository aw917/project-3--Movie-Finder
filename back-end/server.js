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
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const moviesController = require('./controllers/moviesController.js')
const MONGOURI = process.env.MONGODB_URI;
const router = express.Router();

// ====================================
// 2. Middleware
// ====================================
app.use(cors());
app.use(express.json());

// ====================================
// 3. Mongoose
// ====================================
mongoose.connect(MONGOURI, {
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
// 4. Port
// ====================================
app.use(express.json());
app.use('/favorited', moviesController);

app.listen(PORT, () => {
    console.log('its working on port ' + PORT)
});

module.exports = router;