'use strict';

function whoAmI(name, age){
  
  if(!name || !age){
    console.error("Arguments not valid");
    return;
  }
  else if(typeof name !== "string"){
    console.error("Name must be a string");
    return;
  }
  
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
  
  if(typeof age !== "number"){
    throw new Error("Age must be a number");
  }
  else if(age <= 0){
    throw new Error("Age cannot be negative");
  }
  
  return 2017 - age;
}

whoAmI("Eric", -29);
