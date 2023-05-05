declare let a: number;

console.log(a);

let localVal = 10;

declare global {
  type MyName = string;
}

export {};
