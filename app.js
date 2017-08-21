'use strict';

function whoAmI(name, age){
  try {
  let yearOfBirth = calcYob(age);
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
  }
  catch(error) {
    console.log(error);
  }
}

function calcYob(age){
  if(age <= 0) throw new Error("Age cannot be negative");
  return 2017 - age;
}

whoAmI("Eric", 29);
