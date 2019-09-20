# Prototype

## Héritage prototypal

Lorsque nous définissons un `Object` en JavaScript, celui-ci possède automatiquement une propriété privée qui contient un lien vers un autre objet appelé le `prototype`. Ce [prototype](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/prototype) possède également son prototype et ainsi de suite sous forme de [chaîne de prototypes](https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes) . 

Tous les objets créés grâce à un littéral [^1] (appelé initialisateur) possèdent le même prototype qui est celui de type `Object`. La propriété `Object.prototype` représente le prototype de `Object`. Pour les objets créés avec l'opérateur `new` et avec un constructeur qui doit être une fonction, la propriété `Object.prototype` fait référence au constructeur lui-même. Ainsi, un objet créé avec `new Object()` hérite de la propriété `Object.prototype`, il en est de même pour les objets literaux. Un objet de type tableau créé avec l'opérateur `new Array()` hérite du protoype `Array.prototype` qui est donc le prototype de son constructeur qui est de type tableau (array).

La propriété `prototype` d'un `Object` permet d'ajouter des méthodes à cet objet en tant que nouvelles propriétés, une méthode étant une propriété d'un objet qui est de type fonction: 

[`demo_4.0.js`](./demo_4.0.js)
````javascript
// create Person as a type of Object with a constructor function and 2 properties
const Person = function(name, age){
    this.name = name
    this.age = age
}

// add speak method to Peson object by prototype
Person.prototype.speak = function(){
    console.log(`Hi! My name is ${this.name}`)
}

// create 2 persons objects
const person1 = new Person('John', 34) // instanceOf Person
const person2 = new Person('Olivia', 25) // instanceOf Person

// Add getAge method to object person1 as method of instance
person1.getAge = function(){
    console.log(`${this.name} is ${this.age} years old`)
}

person1.speak() // Hi! My name is John
person1.getAge() // John is 34 years old
person2.speak() // Hi! My name is Olivia
person2.getAge() // TypeError: person2.getAge is not a function
````
L'ajout d'une méthode par prototype sur un objet constructeur (ici Person) rend cette méthode disponible pour toutes les instances liées à cet objet. En effet, la méthode `.speak()` est disponible pour les instances `person1` et `person2`.

L'ajout d'une méthode d'intance (en tant que propriété particulière à une instance d'un objet constructeur) rend cette méthode uniquement disponible pour cette instance, en effet, dans l'exemple ci-dessus, la méthode `.getAge()` n'est pas disponible pour l'objet `person2`. ` person2.getAge()` retourne donc une erreur `TypeError: person2.getAge is not a function`.


__Remarque:__

Lorsqu'une fonction héritée (par prototype ou par méthode d'instance) est exécutée, la valeur de `this` pointe vers l'objet hérité (instance) et non vers l'objet prototype qui possède la fonction comme propriété en propre.

Il n'est pas possible de déclarer un constructeur ou une méthode via prototype avec une fonction fléchée (ES6) car dans ce cas `this` ne serait pas défini...

[^1]: Objet litéral 
En JavaScript, un objet litéral correspond à une façon de déclarer un objet sous la forme d'une liste de propriétés (clés) et de valeurs séparées par deux point verticaux, délimitées par des virgules et entourées par des accolades {} (curly braces). Les objets litéraux permettent d'emcapsuler des données et donc de réduire l'utilisation de variables globales. exemple : const monObjet = { prop1: 'valeur1',  prop2: 'valeur2' }
