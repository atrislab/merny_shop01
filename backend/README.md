Base de datos de Mongo

La he realizado con mongo visualizándola en Mongo Compass.
También hemos creado elementos desde la terminal de mongo compass.

Algunos ejemplos de uso de consola en MongoCompass han sido los siguientes:

.- show dbs: que me indica en qué base de datos de las creadas me encuentro

.- use "database_name": trabajar o movernos a la base de datos seleccionada (entre comillas, el nombre de la base de datos).

.- show collections: nos muestra las colecciones de la base de datos en la que estamos.

.- CREAR COLECCIÓN (en este caso providers)
db.createCollection("providers")



Para conectar mi aplicación a la base de datos uso el archivo db_mongo.js de la carpeta utils

Aunque el "cerebro de la máquina" es app.js, que es el archivo encargado de coordinar al conjunto de elementos de nuestra aplicación, indicando a su vez el puerto en el que podremos realizar las operaciones como usuario o admin.

Lo primero es definir en la carpeta modules las colecciones que vamos a utilizar y las relaciones entre ellas, teniendo así claro cómo vamos a recoger la información. Al usar Mongoose, vamos a utilizar el método populate pare relacionar las dos colecciones que tenemos.

La carpeta controladores alberga los archivos que definen las funciones que vamos a usar para definir los métodos

La carpeta routes alberga las rutas que vamos ausar para acceder a la info
Actualmente el archivo funcional para este proyecto es el de productsRoutes, donde tenemos un buen puñado de rutas con las que experimentar.

