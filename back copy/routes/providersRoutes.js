const express = require('express')
const providersApiController = require('../controllers/providersApiController');
const providersRouter = express.Router();


//GET
providersRouter.get('/api/providers/:company?', providersApiController.getProvider);

//POST
providersRouter.post('/api/providers/', providersApiController.createProvider);




module.exports = providersRouter;