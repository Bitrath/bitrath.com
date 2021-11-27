const express = require('express');

const router_articles = express.Router();

const {
  getAllArticles,
  getArticleById,
} = require('../controller/articleControllers');

//@desc GET all articles from db
//@route GET /api/articles
router_articles.get('/', getAllArticles);

//@desc GET an article by id
//@route GET /api/articles/:id
router_articles.get('/:id', getArticleById);

module.exports = router_articles;
