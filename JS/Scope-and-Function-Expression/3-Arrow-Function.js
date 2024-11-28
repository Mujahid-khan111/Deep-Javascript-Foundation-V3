// This is Arrow Function 
let arrowFun = (a, b) => (a * b);
console.log(arrowFun(2, 5));

// This is Arrow Function in use Array in map method
let arr = [1, 2, 3, 4, 5];
let arrowMap = arr.map((index) => index * 2);
console.log(arrowMap);



let ar = [1, 2, 3, 4, 5];
let armap = ar.map((index) => index * 5);
console.log(armap);



let red = [1, 2, 3, 4, 5];
let reds = red.reduce((acc,item) => acc + item,0);
console.log(reds);

let a  = [1,2,3,4];
let b = a.reduce((acc,item) => acc * item);
console.log(b);

let c  = [1,2,3,4];
let d = c.filter(item => item > 2);
console.log(d);