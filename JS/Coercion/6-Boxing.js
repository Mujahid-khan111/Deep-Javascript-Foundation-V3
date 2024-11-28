// Boxing ==>

// boxing ka mtlb he javascript me ye hote he ki jb hm kisi primitive value (number,string ,boolen )pr 
// koi method ya proprti apply krte he to javascript us primitive ko temraly ek object me box kr deti he iss 
// hm uske method or proprtise ka use kr skt ehte

var a = new String("b");
a.name = "mujahid";
console.log(a);    //[String : "b"] {name :mujahid}
console.log(typeof(a));   // object

var b = new Number(89);
b.age = 21;
console.log(b);   //[Number : 89] {age : 21}
console.log(typeof(b));


var a = new Boolean(true);
a.name = false;
console.log(a);   //[Boolean : true] {name : false};


