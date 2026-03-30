const http = require("http")//toda la libreria http esta almancenada en un objeto de nombre http
//creo una variable
let valor = 28;

const name = require('./another') //con "./" requerimos archivos de la misma carpeta para utilizar su contenido
console.log({name});
function requestController(){
    //logica de nuestra funcion
     console.log("recibimos una nueva request");

}
//configurar nuestro servidor 
const server = http.createServer(requestController)// es un metodo crea un servidor y lo 
// almacenamos en una constante server
server.listen(4000)//server escucha en el puerto 4000  //luego se le pasa una funcion 
// para controlar las peticiones a gusto
console.log(valor);