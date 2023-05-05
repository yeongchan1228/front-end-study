declare class Dog {
    name: string;
    constructor(name: string);
    bulk(): void;
}
declare let dog1: Dog;
declare let dog2: Dog;
declare class Word {
    num: number[];
    str: string[];
    constructor(...vals: (number | string)[]);
}
declare let word: Word;
