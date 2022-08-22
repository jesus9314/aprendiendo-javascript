//variables

var a //declarando
var b = 'b' // declaramos y asignamos
b = 'bb' //reasignación
var a = 'aa' //redeclaración


//Global Scope se instancian en el objeto window
var fruit = 'apple' //global
console.log(fruit)

function bestFruit(){
    console.log(fruit)
}

bestFruit() // apple

//no hacer, al asignar, sin declarar, estamos convirtiendo esa variable en global
function countries(){
    country = 'Perú' //asignamos un valor pero sin declarar
    console.log(country)
}
countries();
console.log(country)