const express = require('express')
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();

//GET
//Todos los productos
productsApiRouter.get('/api/products/:id?', productsApiController.getProducts);
//  http://localhost:3000/api/products

//Productos ordenados por nombre ascendente
productsApiRouter.get('/api/products/title/asc', productsApiController.getProductsByTitleAsc);
//  http://localhost:3000/api/products/title/asc

//Productos ordenados por nombre descendente
productsApiRouter.get('/api/products/title/desc', productsApiController.getProductsByTitleDesc);
//  http://localhost:3000/api/products/title/desc

//Productos ordenados por precio ascendente
productsApiRouter.get('/api/products/price/asc', productsApiController.getProductsByPriceAsc);
//  http://localhost:3000/api/products/price/asc

//Productos ordenados por precio descendente
productsApiRouter.get('/api/products/price/desc', productsApiController.getProductsByPriceDesc);
//  http://localhost:3000/api/products/price/desc


//Productos ordenados por estrellas ascendente
productsApiRouter.get('/api/products/stars/asc', productsApiController.getProductsByStarsAsc);
//  http://localhost:3000/api/products/stars/asc

//Productos ordenados por estrellas descendente
productsApiRouter.get('/api/products/stars/desc', productsApiController.getProductsByStarsDesc);
//  http://localhost:3000/api/products/stars/desc


//Productos por palabra clave (todos los que contienen esa fracción de string en su nombre)
productsApiRouter.get('/api/product/title/:title', productsApiController.getProductsByKeyword);
//  http://localhost:3000/api/product/title/Steel

//Productos por nombre completo (un solo producto)
productsApiRouter.get('/api/product/title/:title', productsApiController.getProductByTitle);
//  http://localhost:3000/api/product/title/Steel Sword

//Productos por id (un solo producto)
productsApiRouter.get('/api/product/id/:id', productsApiController.getProductById);
//  http://localhost:3000/api/product/id/7

//Todos los productos con un número concreto de estrellas (1, 2 o 3)
productsApiRouter.get('/api/product/stars/:stars', productsApiController.getProductsByStars);
//  http://localhost:3000/api/product/stars/2

//Todos los productos con un precio concreto
productsApiRouter.get('/api/product/price/:price', productsApiController.getProductsByPrice);
//  http://localhost:3000/api/product/price/160


module.exports = productsApiRouter;

