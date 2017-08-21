'use strict'

function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}

function beyond(num){
  if(Math.abs(num) == Infinity){
    return "And beyond";
  } else if(num>0){
    return "To infinity";
  } else if(num<0){
    return "To negative infinity";
  } else{
    return "Staying home";
  }
}

function decode(code){
  const ourArray = code.split(" ");
  let dString = "";
    for(let i=0; i<ourArray.length; i++) {
      switch(ourArray[i].charAt(0)) {
        case "a":
          dString += ourArray[i].charAt(1);
          break;
        case "b":
          dString += ourArray[i].charAt(2);
          break;
        case "c":
          dString += ourArray[i].charAt(3);
          break;
        case "d":
          dString += ourArray[i].charAt(4); 
          break;
        default: 
          dString += " ";
      }
    }
    return dString;
}

console.log(decode("craft block argon meter bells brown croon droop"));


