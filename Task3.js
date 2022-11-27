//AFL Task 3


class Animal {

  constructor(animalSound) {
    this.animalSound=animalSound; 
  }
   sound() {
    console.log(this.animalSound); 
    
  }
}

// Dog is inherited from Animal
class Dog extends Animal {
    constructor(){
      super('Bark')
    }
  }


// Cat is inherited from Animal
class Cat extends Animal {
  constructor(){
    super('Meow')
  }
}

const germanShepard=new Dog()
const englishCat=new Cat()

germanShepard.sound()
englishCat.sound()