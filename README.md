# Notes pour la programmation en JavaScript

> Ces notes sont destinées à l'apprentissage de la programmation en JavaScript. Elles pourront également servir de base à la rédaction d'articles ultérieurs ou à la préparation d'autres formes d'interventions à caractère pédagogique.

> Tous les exemples de code présentés au cour de cette documentation sont regroupés dans le répertoire `demo` présent à la racine de [ce dépot GitHub](https://github.com/Drozerah/JS-Notes.git). Ils peuvent être exécuté directement dans le terminal via la commande : `node demo_x.js`. Devant chaque exemple est indiqué le nom du fichier de démonstration correspondant. Certains fichiers peuvent contenir plusieurs variantes alors commentées.

Auteur : [Drozerah aka Thomas G](https://github.com/Drozerah).

## Les variables:

### Différences entre les instructions `let`, `const` et `var`

Ces trois instructions permettent de déclarer des variables en JavaScript. L'instruction `var` correspond au mot-clé utilisé historiquement par le language, les mots-clés `const` et `let` ont été introduits par le standard ECMAScript ES2015 aussi appelé ES6.

le mot-clé  [`var`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var) permet de définir une variable globale ou locale à une fonction tandis que [`const`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const) et [`let`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let) permettent de déclarer des variables dont les portées sont limitées à celles des [blocs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/bloc) courants dans lesquels elles sont déclarées.

Considérons le code suivant composé d'une Expression de Fonction Invoquée Immédiatement ([IIEF](https://developer.mozilla.org/fr/docs/Glossaire/IIFE)) contenant une instruction conditionelle [`if`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else). L'instruction `if` crée une portée qui englobe les variables `var` et `let` mais dont la variable `var` ne dépend pas, ce qui la rend accessible depuis l'extérieur:  

`demo_1.0.js`
````javascript
(function(){
    
  if(true){
    var v = 10
    let l = 20    
  }
  console.log(`v is ${v}`) // v is 10 
  console.log(`l is ${l}`) // ReferenceError: l is not defined
})()
````
Si nous exécutons ce code, le contenu de la variable `var` est retourné tandis que la console retourne le message `ReferenceError: l is not defined` pour la variable `let` puisque celle-ci n'est pas accessible depuis l'extérieur de l'instruction conditionelle.

L'instruction `const` permet de déclarer une constante. Il n'est pas possible de réasigner une nouvelle valeur à une constante déja assignée à un [type primitif](https://developer.mozilla.org/fr/docs/Glossaire/Primitive) tel que (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`) mais il est possible de modifier les valeurs pour les types non primitifs tels que `Objet` ou `Array` (tableaux) déja déclarés, exemples:

`demo_1.1.js`
````javascript
// Réasigner un entier à une constante 
(function(){

    const c = 12 
    c = 14
    console.log('c is ', c) // TypeError: Assignment to constant variable
})()
````
Tenter de réasigner un nombre entier ( type `integer`) à une constante déjà assignées lève automatiquement une exception lors de l'exécution `TypeError: Assignment to constant variable`. 

> **Remarque**: une exception `TypeError` est levée lorsque qu'un argument ou un opérande est utilisé avec une fonction ou un opérateur incompatible avec le type attendu. [Voir le constructeur `Error` en JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error)

`demo_1.2.js`
````javascript
// Réasigner une chaine de caractères assignée à une constante 
(function(){

    const s = 'Hello'
    s = 'Hello World!'
    console.log('s is ', s) // TypeError: Assignment to constant variable
})()
````

Il en est de même avec le type `string` (chaîne de caractères)

`demo_1.3.js`
````javascript
// Réasigner un tableau assigné à une constante  
(function(){

    const arr = ['1', '2', '3']
    arr = ['4', '5', '6']
    console.log('arr is ', arr) // TypeError: Assignment to constant variable
})()
````
Réasigner un Objet de type tableau lève également une exception bien qu'il soit possible d'accéder en écriture aux valeurs contenues dans les objets déja assignés. Exemples :

`demo_1.4.js`
````javascript
// Modifier un tableau assigné à une constante
(function(){

    const arr = ['1', '2', '3']
    arr.push('4')
    arr.push('5')
    console.log('arr is ', arr) // arr is ['1', '2', '3', '4', '5']

})()
````

`demo_1.5.js`
````javascript
// Modifier la valeur d'une propriété d'un objet assigné à une constante
(function(){

    const obj = {
        product: 'Banana',
        amount: 3
    }
    obj.amount = 10
    console.log('obj is ', obj) // obj is  { product: 'banana', amount: 10 }
})()
````


