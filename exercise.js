"use strict";
// -------------------------------------------------------------
// ①Write a JS program to extract the first half of a string of even length.;

function half(fruit) {
  console.log(fruit.length);
  if (fruit.length % 2 === 0) {
    const firstHalfLetter = fruit.slice(0, fruit.length / 2);
    console.log(firstHalfLetter);
  }
}

half("banana");
half("mango");
half("I am a student");

// ------------------------------------------------------------
// ②Write a JS program to concatenate 2 strings except their first character.
const concatenate = (first, second) => {
  // console.log(first.slice(1, first.length) + second.slice(1, second.length));
  console.log(first.slice(1) + second.slice(1));
};

concatenate("abc", "def");
concatenate("Japanese", "Canadian");

// ------------------------------------------------------------
// ③Given two value, write a JS program to find out which one is nearest to 100
const closestNum = (num1, num2) => {
  const numA = 100 - num1;
  const numB = 100 - num2;

  if (numA < numB) {
    return `${num1} is closest to 100 than ${num2}`;
  } else if (numA > numB) {
    return `${num2} is closest to 100 than ${num1}`;
  }else{
    return `${num1} & ${num2} is same number. Can't compare`
  }
};

console.log(closestNum(79, 80));
