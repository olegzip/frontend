

let users1 = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
    }];

let users2 = [{
    name: "Eugen",
    surname: "Ivanov",
    gender: "male",
    age: 27
},
    {
        name: "Pavlo",
        surname: "Petrenko",
        gender: "male",
        age: 55
    }];

// console.log(users1[1].surname);

function findElementsInArray(arr, key) {
    let result = [];
    arr.forEach(function (item, i, arr) {
        if (item.key){
            result.push(item);
        }
    })
}

function excludeBy(arr1, arr2, val) {

    let resuilt = [];
    arr1.filter()



    return result;
}

console.log(excludeBy(users1, users2, 'surname'));
