'use strict';

function whoAmI(name, age){
  try {
    let yearOfBirth = calcYob(name, age);
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
  }
  catch(error) {
    console.log(error);
  }
}

function calcYob(name, age){
  // console.log(typeof(typeof name));
  // console.log(typeof age);
  
  if(!name || !age){
    console.error("Arguments not valid");
  }
  else if(typeof name !== "string"){
    console.error("Name must be a string");
  }
  else if(typeof age !== "number"){
    console.error("Age must be a number");
  }
  else if(age <= 0){
    throw new Error("Age cannot be negative");
  }
  
  return 2017 - age;
}

whoAmI("Eric", 29);
