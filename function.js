function sum(a,b){
    console.log(arguments); // arguments gulo ki dewa hoiache ta dekhabe.
    const result = a+b;
    console.log(result);
    return result;
}


// sum ar vitor kono argument na dile nan asbe.
sum(2,4);

const add = sum(4,6);
console.log(add); // function ar vitor "return" na korle "result" ke ai ta undefined asbe.