const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const newData = { id: 4, name: 'Alice' };

const newArray = [...users, newData]; // users array te new object jukto korbe.
// console.log(newArray);


const remainigUsers = users.filter(p => p.name !== 'Alice'); // alice bade sob filter/remove kore dibe.
console.log(remainigUsers);

const newArray2 = [...remainigUsers,newData]; //alice remove kora array te newdata add kora hoiace.
console.log(newArray2);