# null et undefined

En JavaScript, le mot-clé `null` correspond à une valeur particulière généralement utilisée pour indiquer l'absence de valeur. Si l'on utilise l'[opérateur `typeof`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof) sur `null`, il retourne la chaîne de caractère "object" ce qui indique que `null` peut être considéré comme une valeur de l'objet global qui indiquerait "pas d'objet". En pratique, `null` est considéré comme le seul membre de sa catégorie et il peut être utilisé pout indiquer "pas de valeur", que cela soit pour les types `number`, `string` ainsi que les objects.

[demo_3.0.js](./demo_3.0.js)
```javascript
// Tester le type du mot-clé `null` avec l'opérateur typeof
(function(){

    console.log(typeof null) // object
})()
```
Il existe un autre mot-clé pour indiquer l'absence de valeur en JavaScript. La valeur `undefined` represente une absence plus profonde et correspond à la valeur de variables qui n'auraient pas été initialisées ainsi que celle obtenue sur les propriétés d'objet ou de tableau qui n'existent pas. `undefined` est aussi retourné par les fonctions pour lesquelles aucune valeur de retour n'auraient été spécifiée ainsi que pour les paramètres de fonctions pour lesquels aucune valeur n'est attribuée. Contrairement au mot clé `null`, `undefined` est une variable globale prédéfinie qui est initialisée avec la valeur "undefined". Si nous appliquons l'opérateur `typeof` sur `undefined`, nous obtenons la chaîne de caractère "undefined".

[demo_3.1.js](./demo_3.1.js)
```javascript
// Tester le type du mot-clé `undefined` avec l'opérateur typeof
(function(){

    console.log(typeof undefined) // undefined
})()
```
Malgré les différences entre  `null` et `undefined`, ces types indiquent tous les deux l'absence de valeur et peuvent être utilisés de manière interchangeable. L'opérateur d'égalité `==` les considère comme égaux, il faut utiliser l'opérateur d'égalité stricte `===` pour les différencier. Ni `null` ni `undefined` ne possèdent de propriétés ou de méthodes et sont toutes deux des valeurs fausses (falsy) quand elles sont évaluées dans un contexte booléen.

[demo_3.2.js](./demo_3.2.js)
````javascript
// Tester l'égalité et la stricte égalité entre null et undefined 
(function(){

    console.log(null == undefined) // true
    console.log(null === undefined) // false
})()
````
**Différences entre `null` et `undefined`**

 `null` et `undefined` représentent des valeurs vides. Lorsqu'une variable est déclarée sans qu'une valeur lui soit assignée JavaScript lui attribue la valeur `undefined`. La valeur `null` est généralement utiliser par le programmeur afin de réinitialiser ou vider le contenu d'une variable...

[demo_3.3.js](./demo_3.3.js)
 ```javascript
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
```

__Remarque:__ 

Afin de déterminer si le contenu d'une variable vaut `undefined` il faut la comparer à la chaîne de caractère "undefined" et non pas au type `undefined`












