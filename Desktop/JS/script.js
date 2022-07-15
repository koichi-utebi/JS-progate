console.log("Hello World");

console.log(3);
console.log(5 + 2);
console.log("5 + 2");
console.log(3 - 2);

console.log(3 * 7);
console.log(6 / 3);
console.log(9 % 2);

console.log("にんじゃ" + "わんこ");
console.log("A" + "B" + "C");

console.log("3" + "5");
console.log(3 + 5);

let name = "John";
console.log(name);
console.log("name");

console.log(name + "さん");
let number = 11;
console.log(number + 5);

number = 7;
console.log(number);
number = 9;
console.log(number);
number = 10;
console.log(number);
number = number + 3;
console.log(number);
number += 3;
console.log(number);

const owner = "John";
console.log(owner);
console.log(`こんにちは、${owner}さん`);

const integer = 12;
if (integer > 10) {
  console.log("数字は10より大きいです");
}

console.log(integer < 30);
console.log(integer <= 12);
console.log(integer > 12);

if (integer > 20) {
  console.log("数字は20より大きいです");
} else {
  console.log("数字は20以下です");
}

if (integer > 20) {
  console.log("数字は20より大きいです");
} else if(integer > 10) {
  console.log("数字は10より大きいです");
} else {
  console.log("数字は10以下です");
}

if (integer >= 10 && integer < 100) {
  console.log("数字は2桁です");
}

const color ="赤";
switch (color) {
  case "赤":
    console.log("ストップ！");
    break;
  case "黃":
    console.log("要注意");
    break;
  default:
    console.log("通行可");
    break;
}