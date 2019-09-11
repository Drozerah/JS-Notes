# Notes pour la programmation en JavaScript

> Ces notes sont destinées à l'apprentissage de la programmation en JavaScript. Elles pourront également servir de base à la rédaction d'articles ultérieurs ou à la préparation d'autres formes d'interventions à caractère pédagogique.

> Tous les exemples de code présentés au cour de cette documentation sont regroupés dans le répertoire `demo` présent à la racine de [ce dépot GitHub](https://github.com/Drozerah/JS-Notes.git). Ils peuvent être exécuté directement dans le terminal via la commande : `node demo_x.js`. Devant chaque exemple est indiqué le nom du fichier de démonstration correspondant. Certains fichiers peuvent contenir plusieurs variantes alors commentées.

Auteur : [Drozerah aka Thomas G](https://github.com/Drozerah).

## Les variables:

### Différences entre les instructions _let_, _const_ et _var_

Ces trois instructions permettent de déclarer des variables en JavaScript. L'instruction _var_ correspond au mot-clé utilisé historiquement par le language, les mots-clés _const_ et _let_ ont été introduits par le standards ECMAScript ES2015 aussi appelé ES6.

le mot-clé  [_var_](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var) permet de définir une variable globale ou locale à une fonction tandis que [_const_](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const) et [_let_](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let) permettent de déclarer des variables dont les portées sont limitées à celles des [blocs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/bloc) courants dans lesquels elles sont déclarées.

Considérons le code suivant composé d'une Expression de Fonction Invoquée Immédiatement ([IIEF](https://developer.mozilla.org/fr/docs/Glossaire/IIFE)) contenant une instruction conditionelle [_if_](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else). L'instruction _if_ crée une portée qui englobe les variables _var_ et _let_ mais dont la variable _var_ ne dépend pas, ce qui la rend accessible depuis l'extérieur:  

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
Si nous exécutons ce code, le contenu de la variable _var_ est retourné tandis que la console retourne le message `ReferenceError: l is not defined` pour la variable _let_ puisque celle-ci n'est pas accessible depuis l'extérieur de l'instruction conditionelle.

