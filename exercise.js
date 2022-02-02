"use strict";
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
