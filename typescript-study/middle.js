var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * rest paramters
 */
function data() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    console.log(vals);
}
data(1, 2, 3, 4, 5);
/**
 * narrowing
 */
function test1(a) {
    if (a && typeof a === "string") {
        console.log(typeof a); // string
    }
}
test1("test");
function print(animal) {
    if ("run" in animal) {
        console.log(animal.run);
    }
    else if ("walk" in animal) {
        console.log(animal.walk);
    }
}
/**
 * never 타입
 */
function test3() {
    throw new Error();
}
function test4() {
    while (true) { }
}
/**
 * 접근 지정자
 */
var User = /** @class */ (function () {
    function User(data, name, age) {
        this.data = data;
        this.name = name;
        this.age = age;
        this.secret = "secret";
    }
    User.staticSecret = "staticSecret";
    return User;
}());
var user = new User("something", "choi", 20);
console.log(user.name); // choi
console.log(user.data); // something
// console.log(user.age); // 에러
// console.log(user.secret); // 에러
// console.log(user.staticSecret); // 에러
console.log(User.staticSecret); // staticSecret
/**
 * Generic
 */
function genericTest(vals) {
    return vals[0];
}
var firstVal = genericTest([1, 2]);
console.log(firstVal + 1);
// function addVal<T>(val: T) {
//   return val + 10;
// }
// addVal<number>(10); // 에러
function addVal(val) {
    return val + 10;
}
console.log(addVal(10));
function getName(val) {
    console.log(val.name);
}
var tupleData = ["string", true];
/**
 * spread operator 타입 지정
 */
var arr = [4, 5, 6];
var arr2 = __spreadArray([1, 2, 3], arr, true);
var arr3 = __spreadArray([1, 2, 3], arr, true);
var testKeyOf = "age";
