// 함수의 호출.
// function printName(firstname) {
//     var myname = "jisu";
//     return myname + " " +  firstname;
// }

// console.log(printName(1,2,3));

// function test() { 
//     console.log(printName()); 
//     var printName = function() {
//         return 'anonymouse';
//     }
// }

// test();

// function test() {
// }

// console.log(test());

// function a() {
//     console.log(toString.call(arguments));
// }

// a();

// function a() {
//     console.log("a is called");
//     b();
// }

// function b() {
//     console.log("b is called");
//     a();
// }

// a();

// console.log(0 === '0');
// console.log(0 === '');
// console.log(0 === ' ');
// console.log(0 === false);

// console.log(0 === null);
// console.log(0 === undefined);


function printName(arg1, arg2) {
    if (arguments.length < 2) {
        throw TypeError("인자의 개수가 올바르지 않습니다.");
    }
    console.log(arg1 + " " + arg2);
}

printName("hoisting");