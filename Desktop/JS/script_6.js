const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundNumber = numbers.find((number) => {
  return number % 3 == 0;
});

const evenNumbers = numbers.filter((number) => {
  return number % 2 == 0;
});

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(foundNumber);
console.log(evenNumbers);
console.log(doubledNumbers);

const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

const foundCharacter = characters.find((character) => {
  return character.id == 3;
});

const underTwenty = characters.filter((character) => {
  return character.age < 20;
});

characters.forEach((character) => {
  console.log(character);
});
console.log(foundCharacter);
console.log(underTwenty);

const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

const fullNames = names.map ((name) => {
  return name.firstName + name.lastName;
});

console.log(fullNames);