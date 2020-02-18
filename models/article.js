const mongoose = require('mongoose');

const Article = mongoose.model('Article', new mongoose.Schema({
    articleName: {
        type: String,
    },
    author: {
        type: String,
    }
}));

exports.Article = Article;
