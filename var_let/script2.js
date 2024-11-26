/*//const regexObj = /cat/i ;
//const regexObj = /[cr]at/i;
const regexObj = /[k-z]at/i;

const str1 = "The cat is white";
const str2 = "Rat eats meat";
const str3 = "Is it ok?";

var result1 = regexObj.test(str1);
console.log(result1);

var result2 = regexObj.test(str2);
console.log(result2);

var result3 = regexObj.test(str3);
console.log(result3);*/

//const regexObj = /^cat/i;
const regexObj = /meat.+$/im;

const str1 = "The cat is white";
const str2 = "Cat eats meat";
const str3 = "These are good meatsgjhgjh";
//const str4 = `
//good meat
//is always good
//`;

var result1 = regexObj.test(str1);
console.log(result1);

var result2 = regexObj.test(str2);
console.log(result2);

var result3 = regexObj.test(str3);
console.log(result3);

//var result4 = regexObj.test(str4);
//console.log(result4);

const regex = /[^km]/i;
const string = 'Hello';

const reslt = regex.test(string);
console.log(reslt);



