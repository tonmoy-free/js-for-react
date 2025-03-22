const users = {
    name : "Rohim",
    age: 28,
    friends : ["bd","india"],
    country : "Bangladesh",
}

const{name,age,friends,country} = users; // object ar key property gulo dia person ka assign kore, tader key dia call korake Object Destructuring bole.
//key name ar bodole onn kisu dia value ka assign korle undefined asbe.  

console.log(name,age,country);