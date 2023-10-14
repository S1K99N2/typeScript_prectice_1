"use strict";
// symbol  this one type data type ,it provides uniqe data type
// let s1=Symbol();
// let s2=Symbol();
// console.log(s1===s2); false
let demos1 = Symbol();
// let data={
//     [s1]:"some data"
// }
// console.log(data[s1]);
class demo {
    [demos1]() {
        return "some data";
    }
}
let d1 = new demo();
console.log(d1[demos1]());
