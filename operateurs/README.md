# Les Opérateurs:

## Différences entre `==` et `===`

Dans le language JavaSript les symbols `==` et `===` sont des [opérateurs de comparaison](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs#Op%C3%A9rateurs_de_comparaison). 

l'opérateur d'égalité `==` réalise une conversion de type avant de pratiquer une comparaison. l'operateur d'égalité sctricte `===` réalise une comparison sans conversion de type et renvoie uniquement `true`si les opérandes sont égaux et de même type.

considérons le code suivant:

[`demo_2.0.js`](./demo_2.0.js)
````javascript
// Opérateurs d'égalité 
(function(){

    console.log( `La comparaison '1' == 1 vaut ${'1' == 1}`) // La comparaison '1' == 1 vaut true
    console.log( `La comparaison '1' === 1 vaut ${'1' === 1}`) // La comparaison'1' === 1 vaut false   
})()
````

Dans le premier cas la comparaison entre la chaîne de caractères `'1'` et le chiffre `1` retourn le booléan `true` puisque le chiffre `1` et convertit en chaîne de caractère avant la comparaison. 

Dans le deuxième cas la comparaison retourne `false` puisque le comparateur d'égalité stricte ne réalise pas de convertion de type.