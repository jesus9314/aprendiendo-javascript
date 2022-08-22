function greeting(){
    let userName = 'Oscar'

    function displayUserName(){
        return `Hola ${userName}`
    }
    return displayUserName
}

const g = greeting()

console.log(g) //retornamos la definición de la función
console.log(g()) //Ejecutamos la función y nos devuelve el valor que retorna