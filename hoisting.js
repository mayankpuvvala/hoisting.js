let i= 2;
function sayit(){
    console.log('hello');

}
//let is an updated and newer version. hence, more easy to access

sayit();
console.log(i);


console.log(j);
ok();
function ok(){
console.log('ok man');
}
var j= 3;
// different type of memory allocation for integers


// as we know var uses reference function and as it is old it has this limitations



let p= 1;
var q=2;
if(true) {
    let p=6;
    var q= 7;
    console.log(p);
    console.log(q);

}
console.log(p);
console.log(q);
// block scope is a concept in let but not in var keyword

// shadowing and illegal shadowing
let foo
var bar
// let and var can stay undeclared but this is not the case for baz
const baz= 2;