'use strict';

function whoAmI(name, age){
  let yearOfBirth = 2017 - age;

  try {
    if(age <= 0) throw new Error("Age cannot be negative");

    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
       }

  catch(error) {
    console.log(error);
  }

}

whoAmI("Eric", -29);



