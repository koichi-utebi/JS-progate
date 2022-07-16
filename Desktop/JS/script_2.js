let integer = 1;
console.log(integer);
integer += 1;
console.log(integer);
integer += 1;
console.log(integer);
integer += 1;
console.log(integer);
integer += 1;
console.log(integer);

let level = 1;
while(level <= 10) {
  console.log(level);
  level += 1;
}

for (let number = 1; number <= 10; number += 1) {
  console.log(number);
}

for (let number = 1; number <= 10; number += 1) {
  if (number % 3 == 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }
}

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[2]);
fruits[0] = "grape";
console.log(fruits[0]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const item = {name: "手裏剣", price: 300};
console.log(item);
console.log(item.name);
console.log(item.price);
item.price = 500
console.log(item.price);

const items = [
  {name: "手裏剣", price: 300},
  {name: "忍者刀", price: 1200}
];

console.log(items[1]);
console.log(items[1].name);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age:5},
  {name: "とりずきん"}
];
for (let i = 0; i < characters.length; i++) {
  const character = characters[i];
  console.log(`名前は${character.name}です`);
  if(character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
}

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  }
  menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
};

console.log(`店名:${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log("おすすめメニューはこちら");
for (let i=0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}
