const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const {Article} = require('../models/article');

router.get("/", async (req, res) => {
    let articles = await Article.find();
    //console.log(articles);
    res.send(articles);
});

router.post('/', async (req, res) => {
        let article = new Article({
            title: req.body.title,
            poster: req.body.poster
        });

    article = await article.save();
    res.send(article);
});


router.put('/:id', async (req, res) => {

    const article = await Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        poster: req.body.poster
        }, { new: true });

    if(!article) return res.status(404).send('The article with the given ID was not found');

    res.send(article);
});

router.delete('/:id', async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id);

    if(!article) return res.status(404).send('The article with the given ID was not found');

    res.send(article);
});

module.exports = router;