var firstName // al declarar se le asigna valor Undefined
firstName = 'Oscar' //Asignamos un valor
console.log(firstName) //oscar

var lastName = 'David' //Declaramos y asignamos al mismo tiempo
lastName = 'Ana' //Reasignamos el valor
console.log(lastName) //Ana

var secondName = 'David' //declarando y asignando
var secondName = 'Ana'  //reasignando y redeclarando
console.log(secondName) //Ana

/*<-------------------------------------------------------------------------------------->*/

//let

let fruit = 'apple' //declarar y asignar
fruit = 'kiwi' //reasignar 
console.log(fruit)//kiwi

//let fruit = 'banana' //con let no se puede reasignar

//const 
//const animal = 'dog' //se declara y se asigna
animal = 'cat' //const no permite reasignar
//const animal = 'sanke' //no se puede volver a declarar una variable de block scope

console.log(animal) //Identifier 'animal' has already been declared

//ejm 2

const vehicles = []
vehicles.push("🐶")
console.log(vehicles) //[ '🐶' ]

vehicles.pop() 
console.log(vehicles) //[]