// // diff var and let and const
// console.log("Start to journey of javascript");
// let a = 10;
// var b = 20;
// console.log("the sum of a and b is :" + (a+b));
// var c = "abhi";
// //var 55a = "abhi"
// //const a =10;
// a = a +10; // not allowed
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);
// // varible types primitives and objects
// let x = "hello";
// let y = 27;
// let z =3.14;
// const p = true;
// let q = null;
// let r = undefined;

// console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
// // object
// let o = {
//     "name": "abhi",
//     "job code":3321,
//     "it handsome": true

// }
//  console.log(o);
//     o.salary = "10000cr";
//     console.log(o);
//     o.salary = "20000cr";

//     console.log("hello i am conditional tutorial");
//     let age = 20;
//     if (age>18) {
//         console.log("you can vote");
//     }
//     else{
//         console.log("you can not vote");
        
//     }
//     let _a = "Abhi";
//     console.log(_a[0]);
//     console.log(_a[1]);
//     console.log(_a[2]);
//     console.log(_a[3]);

//     console.log(a.length);

// let b =
let random = Math.random();
console.log(random);
let a = prompt("Enter the first number:");
let c = prompt("enter the operation:");
let b = prompt("enter the second number:");

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
}


if (random < 0.1) {
    alert(`the result of operation ${eval (`${a} ${c} ${b}`)}`);
}
else{
    c=obj[c];
}