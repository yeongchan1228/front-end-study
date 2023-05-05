/**
 * 타입 지정하기
 */
var myName = "choi";
var nameArray = ["choi", "kim"];
var nameObject = { name: "choi" };
var nameNullableObject = {};
/**
 * 타입 지정하기 애매할 경우
 */
var unionType = 10;
var anyVal = "test";
anyVal = 10;
anyVal = "10";
var unknownVal = 10;
unknownVal = "10";
// let otherVal1: string = unknownVal;
var otherVal2 = anyVal;
/**
 * 함수에서 타입 사용하기
 */
function myFunction(x) {
    return x + 1;
}
function voidFunction(x) {
    console.log(x);
}
function myFunction2(x) {
    return x;
}
myFunction2();
// function muFunction3(x: number | string): void {
//   console.log(x + 3);
// }
/**
 * Narrowing
 */
function muFunction4(x) {
    if (typeof x === "number") {
        x + 2;
    }
    else {
        x + "2";
    }
}
/**
 * Assertion
 */
function muFunction5(x) {
    var array = [];
    // array.push(x); 에러
    array.push(x);
}
var res;
var test = { name: "name", age: "123" };
var hometown = { name: "seoul" };
var position = { x: 10, y: 20 };
/**
 * Literal types
 */
var mood;
function printMood(mood) {
    console.log(mood);
}
mood = "angry";
printMood(mood);
var literalData = { name: "choi" };
function printLiteralData(name) {
    console.log(name);
}
// printLiteralData(literalData.name);
var literalData2 = { name: "choi" };
function printLiteralData2(name) {
    console.log(name);
}
printLiteralData(literalData2.name);
var exFunction = function (x) {
    return Number(x);
};
exFunction("10");
var testData = {
    name: "choi",
    age: 10,
    burk: function (x) {
        console.log(x);
    },
};
