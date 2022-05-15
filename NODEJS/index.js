/*const greet = (name)=>{
    console.log(`Hello ${name}`);
};

greet("Ansun");
*/

/*let arr = ['ram', 'shyam'];
console.log(arr);
*/
const calc = require("./calculator");
const { add, subs } = calc;
console.log(add(3, 5));
console.log(subs(2, 5));