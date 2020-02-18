const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const {Article} = require('../models/article');

router.get("/", async (req, res) => {
    res.send('index', {title: 'Hey', message: 'Hello There!'});
});

module.exports = router;