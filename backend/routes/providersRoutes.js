const express = require('express')
const providersApiController = require('../controllers/providersApiController');
const providersRouter = express.Router();


//GET
providersRouter.get('/:provider?', providersApiController.getProvider);

//POST

providersRouter.post('/createprovider', providersApiController.createProvider);
providersRouter.post('/createproviders', providersApiController.createProviders);




module.exports = providersRouter;