const friends = ["hero", "JKR", "SRK", "Rahim", "jalal"];

const person = {
    name: "Gias",
    age: 10,
    friends: friends,
}
person.name ="Hero Alom"; // name "Gias" change hoia "Hero Alom" hobe.

console.log(person.name) //.name  dot use kore object access korake dot notation bole.
console.log(person["age"]); //["age"]  bracket use kore object access korake bracket notation bole.
console.log(person.friends[0]); // person object ar vitore friends array ar 0 tomo index ka access kora hoiache.

