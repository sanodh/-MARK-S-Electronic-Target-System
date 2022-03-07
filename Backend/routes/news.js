const express = require('express');
const newsController = require('../controllers/news');

const news = express.Router();

news.get('/getNews', newsController.getAll)

news.get('/:id', newsController.getById)

news.post('/createNews', newsController.create)

news.put('/:id', newsController.getByIdandUpdate)

news.delete('/:id', newsController.getByIdandDelete)


module.exports = news;