let cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

console.log(cards.indexOf('jack of clubs')); //1

let cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

console.log(cards.indexOf('jack of clubs', 2  )); // -1

function isOdd(element, index, array) {
  return (element %2 === 1);
}

console.log([4, 6, 8, 10].find(isOdd)); // undefined, not found
console.log([4, 5, 8, 10].find(isOdd)); // 5
console.log([4, 5, 7, 8, 10].find(isOdd)); // 5
console.log([4, 7, 5,  8, 10].find(isOdd)); // 7
