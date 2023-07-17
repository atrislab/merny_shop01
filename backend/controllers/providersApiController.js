const Provider = require("../models/providers");

//GET CONTROLLER
const getProvider = async (req, res) => {
  if (req.params.company) {
    try {
      let result = await Provider.find({company_name: req.params.company }, "-_id -__v");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  } else {
    try {
      let providers = await Provider.find({}, "-_id -__v");
      res.status(200).json(providers);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

//POST

//POST
const createProvider = async (req, res) => {
  try {
    console.log(req.body);
    const newProvider = req.body;
    const createdProvider = await Provider.create(newProvider);

    res.status(201).json(createdProvider);
  } catch (err) {
    console.log(err);
  }
};

const createProviders = async (req, res) => {
  try {
    console.log(req.body);
    const newProviders = req.body;
    const createdProviders = await Provider.insertMany(newProviders);

    res.status(201).json(createdProviders);
  } catch (err) {
    console.log(err);
  }
};

/*
//POST(2)
const createProvider = async (req, res) => {
  try {
    const { cif } = req.body;
    const provider = await Provider.findOne({ cif });
    const { product_name, price } = req.body;
    const product = new Product({
      product_name,
      price,
      provider_id: provider._id,
    });
    const response = await product.save();
    res.status(201).json({
      message: "producto creado",
      product: {
        response,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
});
*/





module.exports = {
  getProvider,
  createProvider,
  createProviders
  
};
