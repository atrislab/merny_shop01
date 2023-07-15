const mongoose = require('mongoose');

//conectando a la base de datos
mongoose.connect("mongodb://localhost:27017/merny_shop00");

const db= mongoose.connection;

//Eventos
db.on("error", error=> console.log(error));
db.once("open", () => console.log("db_mongo.js has the pleasure to annunce that the connection with MongoDB is established! :D"));

module.exports = mongoose;