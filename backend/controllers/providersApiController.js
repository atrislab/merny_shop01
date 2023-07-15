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


//POST CONTROLLER
const createProvider = async (req, res) => {
  try {
    let { cif, company_name, address, url_web } = req.body;
    let result = new Provider({
      cif,
      company_name,
      address,
      url_web,
    });

    let response = await result.save();
    res.status(201).json({
      message: "Proveedor creado",
      provider: {
        response,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};




module.exports = {
  getProvider,
  createProvider
  
};
