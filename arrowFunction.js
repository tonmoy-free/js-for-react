const sum = (a,b) => a+b ; 

console.log(sum(4,6));


const sumA = (...rest) =>{ //...rest return a array [ 4, 6, 7 ]
    return rest;
}; 

console.log(sumA(4,6,7));