class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  bulk() {
    console.log("Wong! Wong!");
  }
}

let dog1 = new Dog("choi1");
let dog2 = new Dog("choi2");

dog1.bulk();

class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...vals: (number | string)[]) {
    vals.forEach((val) => {
      console.log(val);
      if (typeof val === "number") {
        this.num.push(val);
      } else {
        this.str.push(val);
      }
    });
  }
}

let word = new Word("kim", 10, 20, 30, "choi", 40);
console.log(word.num);
console.log(word.str);
