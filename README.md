# Notes pour la programmation en JavaScript

> Ces notes sont destinées à l'apprentissage de la programmation en JavaScript. Elles pourront également servir de base à la rédaction d'articles ultérieurs ou à la préparation d'autres formes d'interventions à caractère pédagogique.

> Tous les exemples de code présentés au cour de cette documentation sont regroupés dans le répertoire `demo` présent à la racine de [ce dépot GitHub](https://github.com/Drozerah/JS-Notes.git). Ils peuvent être exécuté directement dans le terminal via la commande : `node demo_x.js`. Devant chaque exemple est indiqué le nom du fichier de démonstration correspondant. Certains fichiers peuvent contenir plusieurs variantes alors commentées.

Auteur : [Drozerah aka Thomas G](https://github.com/Drozerah).

## Les variables:

### Différences entre les instructions `let`, `const` et `var`

Ces trois instructions permettent de déclarer des variables en JavaScript. L'instruction `var` correspond au mot-clé utilisé historiquement par le language, les mots-clés `const` et `let` ont été introduits par le standards ECMAScript ES2015 aussi appelé ES6.

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


