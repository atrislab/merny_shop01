Esta es mi primera base de datos.

La he realizado con mongo visualizándola en Mongo Compass.
También hemos creado elementos desde la terminal de mongo compass.

Algunos ejemplos de uso de consola en MongoCompass han sido los siguientes:

.- show dbs: que me indica en qué base de datos de las creadas me encuentro

.- use "database_name": trabajar o movernos a la base de datos seleccionada (entre comillas, el nombre de la base de datos).

.- show collections: nos muestra las colecciones de la base de datos en la que estamos.

.- CREAR COLECCIÓN (en este caso providers)
db.createCollection("providers")

.- INSERTAR UN DOCUMENTO A LA COLECCIÓN (en este caso, providers)
db.providers.insertOne({
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
})

.- INSERTAR VARIOS DOCUMENTOS A LA COLECCIÓN (en este caso, a products)
db.products.insertMany([
    {
        "id":4,
	"title": "Mini Kalimotxo - Marquina",
        "price": 3.50,
        "description":"Los mejores minis de la zona en el Teatro Marquina",
        "provider": ObjectId("6489aeeac22a843b68f62d12")
    },
    {
	"id":5,
        "title": "Mini Clara - Marquina",
        "price": 3.50,
        "description":"Los mejores minis de la zona en el Teatro Marquina",
        "provider": ObjectId("6489aeeac22a843b68f62d12")
    }
]);

Para conectar mi aplicación a la base de datos uso el archivo db_mongo.js de la carpeta utils

Aunque el "cerebro de la máquina" es app.js, que es el archivo encargado de coordinar al conjunto de elementos de nuestra aplicación, indicando a su vez el puerto en el que podremos realizar las operaciones como usuario o admin.

Lo primero es definir en la carpeta modules las colecciones que vamos a utilizar y las relaciones entre ellas (fk, Pk...), teniendo así claro cómo vamos a recoger la información.

La carpeta controladores alberga los archivos que definen las funciones que vamos a usar para definir los métodos

