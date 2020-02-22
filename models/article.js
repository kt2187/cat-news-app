const mongoose = require('mongoose');

const Article = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String,
    },
    poster: {
        type: String,
    }
}));

exports.Article = Article;
