/**
 * rest paramters
 */
function data(...vals: number[]) {
  console.log(vals);
}

data(1, 2, 3, 4, 5);

/**
 * narrowing
 */
function test1(a: string | undefined) {
  if (a && typeof a === "string") {
    console.log(typeof a); // string
  }
}

test1("test");

type Lion = {
  run: string;
};

type Cat = {
  walk: string;
};

function print(animal: Lion | Cat) {
  if ("run" in animal) {
    console.log(animal.run);
  } else if ("walk" in animal) {
    console.log(animal.walk);
  }
}

/**
 * never 타입
 */
function test3(): never {
  throw new Error();
}

function test4(): never {
  while (true) {}
}

/**
 * 접근 지정자
 */
class User {
  public name: string;
  protected age: number;
  private secret: string;
  static staticSecret: string = "staticSecret";
  constructor(public data: string, name: string, age: number) {
    this.name = name;
    this.age = age;
    this.secret = "secret";
  }
}

let user = new User("something", "choi", 20);
console.log(user.name); // choi
console.log(user.data); // something
// console.log(user.age); // 에러
// console.log(user.secret); // 에러
// console.log(user.staticSecret); // 에러
console.log(User.staticSecret); // staticSecret

/**
 * namespace
 */
namespace Animal {
  type Dog = { name: string };
  type Cat = { nickname: string };
}

/**
 * Generic
 */

function genericTest<T>(vals: T[]) {
  return vals[0];
}

let firstVal = genericTest<number>([1, 2]);
console.log(firstVal + 1);

// function addVal<T>(val: T) {
//   return val + 10;
// }

// addVal<number>(10); // 에러

function addVal<T extends number>(val: T) {
  return val + 10;
}

console.log(addVal<number>(10));

interface NameCheck {
  name: string;
}
function getName<T extends NameCheck>(val: T) {
  console.log(val.name);
}

/**
 * tuple type
 */
type Tuple = [string, boolean?];

let tupleData: Tuple = ["string", true];

/**
 * spread operator 타입 지정
 */
let arr = [4, 5, 6];
let arr2: [number, number, number, ...number[]] = [1, 2, 3, ...arr];
let arr3: number[] = [1, 2, 3, ...arr];

/**
 * keyof {Object}
 */
interface Test {
  age: number;
  name: string;
}
type TestTypes = keyof Test;

let testKeyOf: TestTypes = "age";

/**
 * typeChanger
 */
interface WrongType {
  name: boolean;
  nickname: boolean;
}

type TypeChanger<T> = {
  [key in keyof T]: string;
};

type CorrectType = TypeChanger<WrongType>;
