let dog= {};
dog.speak = function(line) {
  console.log(`Gua Gua Gua! '${line}'`);
};

dog.speak("I'm amazing.");
//
function speak(line) {
    console.log(`A ${this.size} Gua Gua Gua! '${line}'`);
  };
  
  let doberman= {size: 'big', speak};
  let aguacatero = {size: 'small', speak };
  
  doberman.speak("I'm amazing.");
  aguacatero.speak("I'm amazing.");
  
  speak("I'm amazing.")  // undefined
  
  speak.call(doberman,"I'm amazing.")  // ??????
//
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  
  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }
  
  //DOM tree Document Object Model
