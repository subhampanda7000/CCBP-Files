class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        return `${this.name} is eating!`;
    }
    makeSound(){
        return `${this.name} is shouting!`;
    }
}
// Inheritance starts
class Dog extends Animal {
    constructor(name,breed){
        super(name); // Method Overriding
        this.breed = breed;
    }
    sniff (){
        return `${this.name} is sniffing!`;
    }
}

class Cat extends Animal{
    constructor(name,breed){
        super(name); // Method Overriding
        this.breed = breed;
    }
    knead (){
        return `${this.name} is kneading!`;
    }
}


let dog = new Dog ("dog","German Shepherd");
console.log(dog);
console.log(dog.sniff());

console.log(dog.eat()) ; // calling superclass method
console.log(dog.makeSound()); // ''

// for cat object 
let cat = new Cat("cat","Persian Cat");
console.log(cat);
console.log(cat.knead());
// calling super class method
console.log(cat.eat());
console.log(cat.makeSound());