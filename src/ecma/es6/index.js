// Antes de ES6
function newFunction(name, age, country) {
    //Se asignaban los valores de los parámetros a variables internas
    var name = name || 'Oscar'
    var age = age || 32
    var country = country || 'PE'
    console.log(name, age, country)
}
// Despues de ES6
function newFunction2(name = 'Oscar', age = 32, country = 'PE') { //se pueden asigar valores por defecto en los parámetros
    console.log(name, age, country)
}
newFunction2() //si no se envian datos, se utilizará los valores pordefecto
newFunction2('Ricardo', 22, 'CO') //Caso contrario, utilizará los valores enviados

//literal templates

//Antes de ES6
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase) // Hello World

//despues de ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2) // Hello World

//Multilinea

// Antes de ES6
let lorem = "La suerte de tu día depende de cómo lo afrontes desde \n" +
    "primera hora de la mañana."

// Despues de ES6
let lorem2 = `Qué maravilloso es que nadie tenga que esperar ni un segundo
para empezar a mejorar el mundo`

//Destructuring

let person = {
    nombre: 'oscar',
    age: 32,
    country: 'PE'
}

//accedemos a las propiedades antes de ES6
console.log(person.nombre, person.age) // oscar 32

//accedemos a las propiedades despues de ES6
let {
    nombre,
    age,
    country
} = person //aplicamos destructuring
console.log(nombre, age) //oscar 32

//Spread operator

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]
console.log(education)
/*
[
  'David',   'Oscar',
  'Julian',  'Ricardo',
  'Valeria', 'Yesica',
  'Camila'
] 
*/

//let
{
    var global = 'global var'
} {
    let globalLet = 'global let'
    console.log(globalLet) //global let
}
console.log(global) //global var
console.log(globalLet) //ReferenceError: globalLet is not defined

//const

const a = 'b'
a = 'a' // TypeError: Assignment to constant variable.

//parámetros en objetos
let nombreObj = 'Oscar'
let ageObj = 32

// Antes de ES6
obj = {
    nombre: nombreObj,
    age: ageObj
}
// Despues de ES6
obj2 = {
    nombreObj,
    ageObj
}

// Arrow Function

const names = [{
        nombre: 'Oscar',
        age: 32
    },
    {
        nombre: 'Yesica',
        age: 27
    }
]

// antes de ES6
let listOfName = names.map(
    function (item) { //función anónima
        console.log(item.nombre)
    }
)
// Despues de ES6
let listOfName2 = names.map(item => console.log(item.nombre))

//estructura de una arrow function
const listOfName3 = (name, age, country) => {
    //código
}
// Cuando paso solo un parámetro
const listOfName4 = name => {
    //código
}
//return implícito
const square = num => num * num

//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}
helloPromise()
    .then(Response => console.log(Response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))

//clases

class calculator{
    constructor(){ //inicializa las variables
        this.valueA = 0
        this.valueB = 0
    }
    //métodos
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator() //Instanciamos un objeto con la clase que creamos
console.log(calc.sum(2,2)) //4

//módulos
import hello from "./module"

hello()

//Generators
function * helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)