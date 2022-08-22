function greeting(){
    let userName = 'Jesús'
    console.log(userName)
    if(userName === 'Jesús'){
        console.log(`Hola ${userName}`)//1. dentro de un bloque en la misma función si puede ser llamada
    }
}
greeting()

//2. intentamos llamar la variable afuera de la función
console.log(userName) //3. ReferenceError: userName is not defined, ya que esta variable solo existe dentro de la función greeting()