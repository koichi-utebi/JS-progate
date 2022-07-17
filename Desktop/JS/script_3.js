const introduce = (name, age) => {
  console.log("こんにちは");
  console.log(`私は${name}です`);
  console.log(`私は${age}歳です`);
};
introduce("にんじゃわんこ", 14);
introduce("ひつじ仙人", 100);

const add = (a, b) => {
  return a + b;
};
const sum = add(1,3);
console.log(sum);

const check = (number) => {
  return number % 2 === 0;
};
console.log(check(6));
console.log(check(7));

const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
}
const result = toMinutes(3, 20);
console.log(`${result}分`);