/**
 * 타입 지정하기
 */
let myName: string = "choi";
let nameArray: string[] = ["choi", "kim"];
let nameObject: { name: string } = { name: "choi" };
let nameNullableObject: { name?: string } = {};

/**
 * 타입 지정하기 애매할 경우
 */
let unionType: string | number = 10;

let anyVal: any = "test";
anyVal = 10;
anyVal = "10";

let unknownVal: unknown = 10;
unknownVal = "10";

// let otherVal1: string = unknownVal;
let otherVal2: string = anyVal;

/**
 * 함수에서 타입 사용하기
 */
function myFunction(x: number): number {
  return x + 1;
}

function voidFunction(x: number): void {
  console.log(x);
}

function myFunction2(x?: number): number {
  return x as number;
}

myFunction2();

// function muFunction3(x: number | string): void {
//   console.log(x + 3);
// }

/**
 * Narrowing
 */
function muFunction4(x: number | string): void {
  if (typeof x === "number") {
    x + 2;
  } else {
    x + "2";
  }
}

/**
 * Assertion
 */
function muFunction5(x: number | string): void {
  let array: number[] = [];
  // array.push(x); 에러
  array.push(x as number);
}

/**
 * type alias
 */
type Data = { code: number; messages: string[]; data?: {} };
let res: Data;

type Member = { [key: string]: string };
let test: Member = { name: "name", age: "123" };

type Hometown = { readonly name: string };
const hometown: Hometown = { name: "seoul" };
// hometown.name = "paju"; 에러

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;
let position: Position = { x: 10, y: 20 };

/**
 * Literal types
 */
let mood: "angry" | "sadness";
function printMood(mood: "angry" | "sadness"): void {
  console.log(mood);
}
mood = "angry";
printMood(mood);

let literalData = { name: "choi" };

function printLiteralData(name: "choi"): void {
  console.log(name);
}

// printLiteralData(literalData.name);

let literalData2 = { name: "choi" } as const;

function printLiteralData2(name: "choi"): void {
  console.log(name);
}

printLiteralData(literalData2.name);

/**
 * 함수 type alias
 */
type FunctionType = (x: string) => number;
let exFunction: FunctionType = function (x) {
  return Number(x);
};

exFunction("10");

type testDataType = {
  name: string;
  age: number;
  burk: (x: string) => void;
};

let testData: testDataType = {
  name: "choi",
  age: 10,
  burk: (x) => {
    console.log(x);
  },
};
