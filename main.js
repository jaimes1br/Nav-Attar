/***************
 * 
 * 
 * Arreglos
 * 
 * 
 */
//........Primera forma de crear un arreglo
let nombres = new Array("Ana", "Brandon", "Paulyna","Luis", "Erik", "Paola","JC");
let texto = "Este es un texto de prueba";


// La funcion forEach...
// Es una version corta para trabajar los contenidos, indices
// y arreglo en general en una funcion que trabaja en ciclos.....

// En la siguiente funcion imprime el contenido de el arreglo nombres 
// junto con su numero de indice de cada uno.

nombres.push("David"); //push - Agrega un elemento al final
nombres[10] = "Dann"; //Agrega un dato en la posicion señalada
nombres.pop(); //Elimina el ultimo elemento del arreeglo, puede asignarse a una variable
nombres.shift(); //Elimina un dato del principio del arreglo, puede asignarse a una variable
nombres.unshift("Pat"); //Agrega un dato al principio del arreglo
nombres.splice(5,0,"Pao"); //splice - Ocupa el lugar que le digas al primer parametro y elimita los elementos que le indique en el segundo..


nombres.forEach(function(item, i){
    console.log(item,i);
    }
);

console.log(nombres.includes("Ana")); //includes - informa si el elemento se encuentra en el arreglo
console.log(nombres.indexOf("Adry")); //indexOf - muestra la posicion del elemento que seesfecifica
console.log(nombres.lastIndexOf("Ana")); //lastIndexOf - Misma funcion que indexOf, pero de derecha a izquierda
let nombres2 = nombres.slice(); // slice - crea una copia del arreglo, ya sea total, con un inicio o un inicio y un final
console.log(nombres.join("*")); // Join - Divide un arreglo  con el caracter señalado
let nombres3 = texto.split(" "); // split - Separa una cadena de texto y la convierte en un arreglo
console.log(nombres3);





// ........Primera forma de crear un arreglo
// let nombres = new Array();
// nombres[0]="Ana";
// nombres[1]="Brandon";
// nombres[2]="Paulyna";
// nombres[3]="Luis";



console.log(nombres.length)
console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);


let edades=[16, 20, 15, 21]
console.log(edades.find(Element=>Element > 15));
console.log(edades.findIndex(Element=>Element > 15));

// let things = ["Abi", 15, true, edades, nombres];
// console.log(things.length)
// console.log(things[0]);
// console.log(things[1]);
// console.log(things[2]);
// console.log(things[3]);
// console.log(things[4]);
