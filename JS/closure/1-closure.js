// Closure tab banta hai jab ek inner function apne outer 
// function ke variables ko access kar sakta hai, even after outer function return ho chuka ho.

function mulFn() {
    var mul = 9;
     function fn(val) {
      mul *= val;
    };
    return fn;
  }

  var mul = mulFn();
  console.log(mul(13)); // function anonymous

  function mulFn() {
    var mul = 9;
     function fn(val) {
     mul =  mul * val;
      return mul;
    };
    mul = 10; // Its worked bcz when we exicute the function then he will be check whats the value of var at that moment and at that moment the value is 10;
    return fn;
  }
  
  var mul2 = mulFn();
  console.log(mul2(13)); // function anonymous


  function fullName(fName){
     fName = "mujahid";
     function lastName(lname){
        fName = fName + " " + lname;
        return fName;
     };
     return lastName;
      }

var fullNameUser = fullName();
console.log(fullNameUser("gurjer"));

  function multiplictionNum1(num1){
    num1 = 10;
    return function multiplictionNum2(num2){
      num1 = num1 * num2;
      return num1;
    }
  }
  const multipliction = multiplictionNum1();
  console.log(multipliction(10));


  function fn(fullName){
    fullName = "mujahid"
    return function fn1(brother){
      fullName = fullName + brother
      return fullName;
    };
  }

  const bro = fn();
  console.log(bro("  khan-boy"));