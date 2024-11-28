// Prefix increment and decrement operator
// Prefix phlay increment kert hay bead may value add kerta hay
let b1, a1 = 5;
b1 = ++a1;
console.log(a1);   // 6
console.log(b1);   // 6

let b2, a2 = 5;
b2 = --a2;
console.log(b2);   // 4
console.log(a2);   // 4

// postfix increment and decrement operater
// Posfix phlay value data hay baad may increment kerta hay
let b3, a3 = 5;
b3 = a3++;
console.log(b3);   // 5
console.log(a3);   // 6

let b4, a4 = 5;
b4 = a4--;
console.log(b4);   // 5
console.log(a4);   // 4

// Examples ==>

let b = 10;
console.log(b++);  // 10
console.log(b);    // 11
console.log(b--);  //11
// console.log(b);    //10

let c = 10;
console.log(c++);          // 10 
console.log(++c);          // 12
console.log(--c + c++);    // 11 + 11
console.log(c);            //  12

let d = 11;
console.log(d);                       // 10
console.log(++d + --d + d++ + --d);   // 45
console.log(d);                       // 11
console.log(--d);                     // 10
console.log(d++);                     // 10
console.log(++d);                     // 12
console.log(--d);                     // 11
console.log(++d - d++ - --d + --d);   // -1
console.log(d);                       // 11

let x = 5;
let y = ++x;
console.log(x);  //5
console.log(y);  //6

let x1 = 5;
let y1 = x1++;
console.log(x1);   // 6
console.log(y1);   // 5

let A = 12;
let B = A++ - ++A;
console.log(B);   // -2
console.log(A);   // 14

let C = 22
let D = C++ - --C + ++C - --C
console.log(D)  // 1
console.log(C)  // 22

let yy, xx = 5, aa = 4, bb = 6;
yy = --xx + aa++ + ++bb;
console.log(yy);    // 15
console.log(xx);    // 4
console.log(aa);    // 5
console.log(bb);    // 7


