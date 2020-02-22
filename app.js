const mongoose = require('mongoose');
const cors = require('cors');
const express = require("express");
const articles = require("./routes/articles");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use("/api/articles", articles);

module.exports = app;