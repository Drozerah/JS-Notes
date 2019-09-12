/**
* Réasigner une chaine de caractères assignée à une constante 
*/

(function(){

    const s = 'Hello'
    s = 'Hello World!'
    console.log('s is ', s) // TypeError: Assignment to constant variable

})()

  