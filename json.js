const users = {
    name: "Rohim",
    age: 28,
    friends: ["bd", "india"],
    country: "Bangladesh",
    family: {
        fatherName: "korim Khan",
        motherName: "Asma Begum",
    }
}

const jsonData = JSON.stringify(users); //key valu du pase double kotation dia json datai convert koreche.  JSON.stringify(users)
console.log(jsonData);

const agerData = JSON.parse(jsonData); // json data theke array object a convert kore.   JSON.parse()

console.log(agerData);