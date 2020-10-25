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
myString10 = myString10.substring(0,1).toUpperCase() + myString10.substring(1).toLowerCase()
myString11 = myString11.substring(0,1).toUpperCase() + myString11.substring(1).toLowerCase()
var myString12 = myString10 + " " + myString11