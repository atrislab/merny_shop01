//Desde app.js gestionamos conexiones y definimos las relaciones entre los diferentes elementos
require('dotenv').config();

const express = require("express");//importa el módulo Express (y la asigna a express)
const app = express();//crea una nueva instancia de la aplicación Express (y la asigna a app)
const port = 3000;//define el puerto en el que se ejecutará la aplicación.
const cors = require ("cors");



//DDBB Connection
require("./utils/db_mongo");


//Habilitar npm cors, para poder hacer peticiones "externas"
app.use(cors());

//Routes modules
const productsRoutes = require("./routes/productsRoutes");
const providersRoutes = require("./routes/providersRoutes");


//Midelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Routes
app.use("/api/products", productsRoutes);
app.use("/api/providers", providersRoutes);


//Listen Port
app.listen(port, () => {
  console.info(`Happy little trees awaiting in port ${port} ^^`);
});