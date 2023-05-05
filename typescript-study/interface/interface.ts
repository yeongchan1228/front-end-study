interface Animal {
  name: string;
  age: number;
}

interface Animal {
  nickname: string;
}

interface DogType extends Animal {
  wong: () => void;
}

localVal = 10;

let poodle: DogType = {
  name: "poodle",
  age: 10,
  nickname: "poody",
  wong: () => {
    console.log("Wong!!");
  },
};

let animal: Animal = {
  name: "animal",
  age: 10,
  nickname: "ani",
};

interface T1 {
  data: string;
}

// interface T2 extends T1 {
//   data: number;
// }

type T3 = { data: string };
type T4 = { data: number } & T3;
// let test2: T4 = { name: "choi" };
