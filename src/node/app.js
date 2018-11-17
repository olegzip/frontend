const fs = require('fs');
const User = require('./user');

const user1 = new User('user1','name1');
const user2 = new User('user2','name2');
const user3 = new User('user3','name3');
const user4 = new User('user4','name4');

const [...users] = [user1,user2,user3,user4];

fs.writeFile('./users.json',JSON.stringify(users), function(err){
});

getUsers = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./users.json','utf8',(err,data)=>{
            if (err) reject(err);
            resolve(JSON.parse(data))
        })
    })
};

writeUsers = (userList) => {
    return new Promise((resolve,reject)=> {
        fs.writeFile('./users.json',JSON.stringify(userList),(err)=>{
            if(err) reject(err);
            resolve('success');
        })
    })
}

//just promises

// addUser = (userFirstName, userLastName) => {
//     const newUser = new User(userFirstName, userLastName);
//     getUsers().then((result)=>{
//         result.push(newUser);
//         writeUsers(result).then((result)=>{
//             console.log(result);
//         })
//     })
// };

//with async/await

addUser = async (userFirstName, userLastName) => {
    const newUser = new User(userFirstName, userLastName);
    let userList = await getUsers();
    userList.push(newUser);
    let result = await writeUsers(userList);
    console.log(result);
};

addUser('user5','name5');