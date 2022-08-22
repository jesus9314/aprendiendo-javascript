function fruits(){
    if(true){ //dentro de esto, es un bloque
        var fruit1 = 'apple' // function scope
        let fruit2 = 'kiwi' //block scope
        const fruit3 = 'banana' //block scope
        //fruit2 y fruit3 solo pueden ser accedidas dentro del bloque
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1) //fruit1 si es accesible por que var tiene function scope
    console.log(fruit2) //mientras que fruit2 y fruit3 tienen block scope
    console.log(fruit3)
}

fruits()