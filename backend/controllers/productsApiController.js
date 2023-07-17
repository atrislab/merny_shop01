const mongoose = require("mongoose");
const Product = require("../models/products.js");
//necesitamos también providers
const Provider = require("../models/providers.js");

//GET CONTROLLER with populate
const getProducts = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v"); //.populate("provider", "-_id");
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByTitleAsc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ title: 1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByTitleDesc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ title: -1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByPriceAsc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ price: 1, title: 1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByPriceDesc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ price: -1, title: 1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByStarsAsc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ stars: 1, title: 1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByStarsDesc = async (req, res) => {
  try {
    let result = await Product.find({}, "-_id -__v")
      .sort({ stars: -1, title: 1 })
      .populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByKeyword = async (req, res) => {
  try {
    let title = req.params.title;
    let result = await Product.find(
      { title: { $regex: title } },
      "-_id -__v"
    ).populate("provider", "-_id");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductByTitle = async (req, res) => {
  try {
    let title = req.params.title;
    let result = await Product.findOne({ title: title }, "-_id -__v").populate(
      "provider",
      "-_id"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Product.findOne({ id: id }, "-_id -__v").populate(
      "provider",
      "-_id"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByPrice = async (req, res) => {
  try {
    let price = req.params.price;
    let result = await Product.find({ price: price }, "-_id -__v").populate(
      "provider",
      "-_id"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductsByStars = async (req, res) => {
  try {
    let stars = req.params.stars;
    let result = await Product.find({ stars: stars }, "-_id -__v").populate(
      "provider",
      "-_id"
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//POST
const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = req.body;
    const createdProduct = await Product.create(newProduct);

    res.status(201).json(createdProduct);
  } catch (err) {
    console.log(err);
  }
};

const createProducts = async (req, res) => {
  try {
    console.log(req.body);
    const newProducts = req.body;
    const createdProducts = await Product.insertMany(newProducts);

    res.status(201).json(createdProducts);
  } catch (err) {
    console.log(err);
  }
};

//ESTO NOS PERMITE USAR ESTAS FUNCIONES DONDE LAS "REQUIRAMOS" ;)
module.exports = {
  getProducts,
  getProductsByTitleAsc,
  getProductsByTitleDesc,
  getProductsByPriceAsc,
  getProductsByPriceDesc,
  getProductsByStarsAsc,
  getProductsByStarsDesc,
  getProductsByKeyword,
  getProductByTitle,
  getProductById,
  getProductsByStars,
  getProductsByPrice,
  createProduct,
  createProducts
};
