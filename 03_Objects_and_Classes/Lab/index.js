// let person = {firstName: 'Peter', lastName: 'Pan', age: 25, sayHello: function() {
//     return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let count = 5;

// const commandParser = {
//     increment: (count) => ++count,
//     decrement: (count) => --count,
//     reset: () => 0,
// }

// count = commandParser.increment(count);
// console.log(count);
// count = commandParser.decrement(count);
// console.log(count);
// count = commandParser.reset();
// console.log(count);

// const person = {
//     firstName: 'Peter',
//     lastName: 'Johnson',
//     fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
// };

// const getFullName = person.fullName;
// console.log(getFullName()); // 'undefined undefined'
// const anotherPerson = { firstName: 'Bob',
//                         lastName: 'Smith' };
// anotherPerson.fullName = getFullName;
// console.log(anotherPerson.fullName()); // 'Bob Smith'


// SORTING
// let people = { 
//   'Kiril': { age: 25, email: 'kiril@abv.bg'},
//   'Peter': { age: 25, email: 'pesho@abv.bg'},
//   'Georgi': { age: 25, email: 'georgi@abv.bg'},
// }

// let entries = Object.entries(people);
// let sortedByName = entries.sort((personA, personB) => {
//   let personAName = personA[0];
//   let personBName = personB[0];
//   return personAName.localeCompare(personBName);
// });

// for (const [name,info] of sortedByName) {
//   console.log(name);
//   console.log(info);
// }

// let result = ['string', 'trim', 'dshi8woa'].reduce((word, wordLength) => {
//   word[wordLength] = wordLength.length;
//   return word;
// }, {});

// console.log(result);
  
// const flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// // flattened is [0, 1, 2, 3, 4, 5]

// console.log(flattened)

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});