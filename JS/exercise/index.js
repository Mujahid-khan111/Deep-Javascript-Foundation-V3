
// Closure

function makecount() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}


// const counter = makecount();
// console.log(counter());  // one time call and acseess value
// console.log(counter());  // call the function and acsesss the value
// console.log(counter());


// Coercion 

let result = '5' + 3;
let value = "10" - 5;

// console.log(result);
// console.log(value);



// Currying

// it is a add fivw number of express Currying

function add(a) {
    return function (b) {
        return a + b;
    }
}

const addfive = add(5); // it is a all time make 5 number

// console.log(addfive(10));
// console.log(addfive(1));
// console.log(addfive(4));

function divid(aa) {
    return function (bb) {
        return aa * bb;
    }
}

// const aabb =  divid(2);
// console.log(aabb(1));
// console.log(aabb(2));
// console.log(aabb(3));
// console.log(aabb(4));
// console.log(aabb(5));





// explicit 

let values = String(10);
console.log(typeof values);