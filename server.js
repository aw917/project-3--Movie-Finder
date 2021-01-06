const express = require('express');
const app = require('./back-end/app.js');
app.use(express.static('build'))