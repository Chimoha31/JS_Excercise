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
}

concatenate("abc", "def");
concatenate("Japanese", "Canadian");

