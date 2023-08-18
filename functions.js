const Math = {};

//Define sumar(add)
function add(a,b){
    return a + b;
}

//Define restar(substract)
function substract(a,b){
    return a - b;
}

//Define multiplicar(multiply)
function multiply(a,b){
    return a * b;

}

//Define dividir(divide)
function divide(a,b){
    if (b == 0){
        return "Error, no aplica"
    } else {
        return a / b;
    }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

//Module: es un archivo JavaScript que tiene código reutilizable  se puede importar para usarse en otros archivos
//Function: es un codigo que se puede usar varias veces para realizar una accion espacifica
//Require: es una funcion de node js, el cual permite importar modulos o archivos javascript a mi codigo para utilizar carcateristicas del archivo que se importo
//process.stdout: es un flujo de salida estándar proporcionado por Node.js, se utiliza para escribir datos enla consola o en similares,