var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.bulk = function () {
        console.log("Wong! Wong!");
    };
    return Dog;
}());
var dog1 = new Dog("choi1");
var dog2 = new Dog("choi2");
dog1.bulk();
var Word = /** @class */ (function () {
    function Word() {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        vals.forEach(function (val) {
            console.log(val);
            if (typeof val === "number") {
                _this.num.push(val);
            }
            else {
                _this.str.push(val);
            }
        });
    }
    return Word;
}());
var word = new Word("kim", 10, 20, 30, "choi", 40);
console.log(word.num);
console.log(word.str);
