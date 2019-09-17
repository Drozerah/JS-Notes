/**
* Déclarer une variable vide
* si la variable est vide, lui assigner une chaîne de caractère
* réasigner la valeur null à la variable
*/
(function(){

    let a;

    console.log(a) // undefined

    if( typeof a === 'undefined' ){

        a = 'Bonjour'

    }

    console.log(a) // Bonjour

    a = null

    console.log(a) // null

})()