// Ejercicio N°1: Variables y Operadores

/*
a) Crear dos variables numéricas y utilizar el operador
suma para guardar el valor de la suma de ambos números
en una 3er variable.
*/

var myNum1 = 1;
var myNum2 = 2;
var mySum = myNum1 + myNum2;

/*
b) Crear dos variables de tipo String y concatenarlas guardando
el resultado en una 3er variable.
*/

var myStr1 = "Hello";
var myStr2 = "World";
var myStr3 = myStr1 + myStr2;

/*
c) Crear dos variables de tipo String y sumar el largo de cada
variable (cantidad de letras del string) guardando el resultado
la suma una 3er variable (utilizar length).
*/

var myStr4 = "Hello";
var myStr5 = "World";
var myQchar = myStr4.length + myStr5.length;

// Ejercicio N°2: Strings

/*
a) Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

var myString1 = "radiumrocket";
myString1 = myString1.toUpperCase();

/*
b) Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres guardando
el resultado en una nueva variable (utilizar substring).
*/

var myString2 = "radiumrocket";
var myString3 = myString2.substring(0,5);

/*
c) Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres guardando el
resultado en una nueva variable (utilizar substring).
*/

var myString4 = "radiumrocket";
var myString5 = myString4.substring(myString4.length-3);

/*
d) Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var myString6 = "raDiumRockeT";
var mystring7 = myString6.substring(0,1).toUpperCase() + myString6.substring(1).toLowerCase();

/*
e) Crear una variable de tipo string con al menos 10 caracteres y
algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).
*/

var myString8 = "radium rocket";
var firstSpace = myString8.indexOf(" ");

/*
f) Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera letra de ambas palabras en mayúscula y las demás letras en
minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var myString9 = "raDiuM rOckeT";
var myString10 = myString9.substring(0,myString9.indexOf(" "));
var myString11 = myString9.substring(myString9.indexOf(" ")+1);
myString10 = myString10.substring(0,1).toUpperCase() + myString10.substring(1).toLowerCase();
myString11 = myString11.substring(0,1).toUpperCase() + myString11.substring(1).toLowerCase();
var myString12 = myString10 + " " + myString11;

// Ejercicio N°3: Arrays

/*
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log)
*/

var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(myArray[4], myArray[10]);

/*
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

myArray.sort();
console.log(myArray);

/*
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

myArray.unshift("Radium");
myArray.push("Rocket");
console.log(myArray);

/*
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

myArray.shift();
myArray.pop();
console.log(myArray);

/*
e) Invertir el orden del array (utilizar reverse)
*/

myArray.reverse();
console.log(myArray);

/*
f) Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).
*/

var array2string = myArray.join("-");
console.log(array2string);

/*
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

myArray2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var myArrayCopy = myArray2.slice(4,11);
console.log(myArrayCopy);

// Ejercicio N°4: If Else

/*
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
y sino un alerta con el mensaje “Lower than 0,5”
*/
var myRandomNum = Math.random();
console.log(myRandomNum)
if (myRandomNum >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

/*
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes
mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años.
*/

var myAge = Math.random() * 100;
myAge = Math.round(myAge);
console.log(myAge);
if (myAge < 2){
    alert("Bebe");
} else if (myAge <= 12) {
    alert("Niño");
} else if (myAge <= 19) {
    alert("Adolecente");
} else if (myAge <= 30) {
    alert("Joven");
} else if (myAge <= 60) {
    alert("Adulto");
} else if (myAge <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}

// Ejercicio N°5: For

/*
a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/

var myArray = ["pen" , "pencil" , "eraser" , "ruler" , "square"];
for (var i = 0; i < myArray.length; i++) {
    alert(myArray[i]);
}

/*
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
una alerta por cada palabra modificada.
*/

for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].substring(0,1).toUpperCase() + myArray[i].substring(1);
    alert(myArray[i]);
}

/*
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
variable sentence. Al final mostrar una única alerta con la cadena completa.
*/

var myArray = ["pen" , "pencil" , "eraser" , "ruler" , "square"];
var sentence  = [];
for (var i = 0; i < myArray.length; i++) {
    sentence.push(myArray[i]);
}
alert(sentence);

/*
d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el
número de la repetición, es decir que al final de la ejecución del bucle for deberia
haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por
la consola del navegador el array final (utilizar console.log).
*/

var myArray3  = [];
for (var i = 0; i < 10; i++) {
    myArray3.push(i);
}
console.log(myArray3);

// Ejercicio N°6: Funciones

/*
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.
*/

function mySum2(num1,num2) {
    return num1 + num2;
}
var myRes = mySum2(2,5);
console.log(myRes);

/*
b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.
*/

function mySum3(num1,num2) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        return num1 + num2;
    } else {
        alert("Al menos uno de los parametros ingresados no es un numero")
        return NaN;
    }
}
var myRes = mySum3("Q",5);
console.log(myRes);

/*
c) Crear una función validate integer que reciba un número como parámetro y verdadero si
es un número entero.
*/

function validateInteger(myNum) {
    if (Number.isInteger(myNum)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateInteger(55.2));

/*
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con elnerror y retorna el
número convertido a entero (redondeado).
*/

function mySum4(num1,num2) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        if (!validateInteger(num1)) { 
            num1 = Math.round(num1);
            alert("El primer parametro no era entero, se convirtio a: " + num1);
            }
        if (!validateInteger(num2)) {
            num2 = Math.round(num2);
            alert("El segundo parametro no era entero, se convirtio a: " + num2);
        }
        return num1 + num2;
    } else {
        alert("Al menos uno de los parametros ingresados no es un numero")
        return NaN;
    }
}
console.log(mySum4(600.5,6.01));

/*
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.
*/

function validateNum(num1,num2) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number'){
        return true;
    } else {
        alert("Al menos uno de los parametros ingresados no es un numero")
        return false;
    }
}
function mySum5(num1,num2) {
    if (validateNum(num1,num2)) {
        if (!validateInteger(num1)) {
            num1 = Math.round(num1);
            alert("El primer parametro no era entero, se convirtio a: " + num1);
            }
        if (!validateInteger(num2)) {
            num2 = Math.round(num2);
            alert("El segundo parametro no era entero, se convirtio a: " + num2);
        }
        return num1 + num2;
    } else {
        return NaN;
    }
}
console.log(mySum5(6.5,10)); 