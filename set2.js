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


console.log(beyond(-Infinity));
