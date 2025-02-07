//variable is the named memory space where we can store the data 
let variable = "abc";
console.log(variable);

//let - let declarations are scoped to blocks as well as functions.
let a = 2;
if(a == 1){
    a=1;
    console.log(a);
}
console.log(a);

//var - The var statement declares function-scoped or
//globally-scoped variables, optionally initializing each to a value.
var x = 1;  //there was the scope problem in var
if (x === 1) {
  var x = 2;
  console.log(x);
}
console.log(x);
