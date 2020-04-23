const express = require('express');

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require('../controllers/authorController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// handle the GET request to get an author by using author ID
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req,res));

// export the router
module.exports = authorRouter;