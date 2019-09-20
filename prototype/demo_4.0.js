// create Person as a type of Object with a constructor function and 2 properties
const Person = function(name, age){
    this.name = name
    this.age = age
}

// add speak method to Person object by prototype
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