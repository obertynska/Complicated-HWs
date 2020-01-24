let num = 266219;

let arr = num.toString().split("");

var result = arr.reduce(function(sum, current) {
        return sum * current;
    });

console.log(result);

let pow = result**3;
let powStr = pow.toString();

console.log(powStr.substr(0, 2));
