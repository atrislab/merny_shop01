const express = require('express')
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();

//GET
//Todos los productos
productsApiRouter.get('/:id?', productsApiController.getProducts);
//  http://localhost:3000/api/products

//Productos ordenados por nombre ascendente
productsApiRouter.get('/title/asc', productsApiController.getProductsByTitleAsc);
//  http://localhost:3000/api/products/title/asc

//Productos ordenados por nombre descendente
productsApiRouter.get('/title/desc', productsApiController.getProductsByTitleDesc);
//  http://localhost:3000/api/products/title/desc

//Productos ordenados por precio ascendente
productsApiRouter.get('/price/asc', productsApiController.getProductsByPriceAsc);
//  http://localhost:3000/api/products/price/asc

//Productos ordenados por precio descendente
productsApiRouter.get('/price/desc', productsApiController.getProductsByPriceDesc);
//  http://localhost:3000/api/products/price/desc


//Productos ordenados por estrellas ascendente
productsApiRouter.get('/stars/asc', productsApiController.getProductsByStarsAsc);
//  http://localhost:3000/api/products/stars/asc

//Productos ordenados por estrellas descendente
productsApiRouter.get('/stars/desc', productsApiController.getProductsByStarsDesc);
//  http://localhost:3000/api/products/stars/desc


//Productos por palabra clave (todos los que contienen esa fracción de string en su nombre)
productsApiRouter.get('/title/:title', productsApiController.getProductsByKeyword);
productsApiRouter.get('/specifictitle/:title', productsApiController.getProductsByKeyword);
//  http://localhost:3000/api/products/title/Steel
//  http://localhost:3000/api/products/specifictitle/Steel

//Productos por nombre completo (un solo producto)
productsApiRouter.get('/title/:title', productsApiController.getProductByTitle);
//  http://localhost:3000/api/products/title/Iron Dagger

//Productos por id (un solo producto)
productsApiRouter.get('/id/:id', productsApiController.getProductById);
//  http://localhost:3000/api/products/id/7

//Todos los productos con un número concreto de estrellas (1, 2 o 3)
productsApiRouter.get('/stars/:stars', productsApiController.getProductsByStars);
//  http://localhost:3000/api/products/stars/2

//Todos los productos con un precio concreto
productsApiRouter.get('/price/:price', productsApiController.getProductsByPrice);
//  http://localhost:3000/api/products/price/160

//POST

productsApiRouter.post('/createproduct', productsApiController.createProduct);
productsApiRouter.post('/createproducts', productsApiController.createProducts);



module.exports = productsApiRouter;

