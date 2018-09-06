function clone(obj) {
    let result = {};
    for (let key in obj) {
        if(key instanceof Object){
            result[key] = clone(obj[key]);
        } else result[key] = obj[key];
    }
return result;
}


/*//TEST
let test = {
    a : 1,
    b : 2,
    c : 3,
    d : [1,3,4,7],
    'qwe' : {
        a : 1,
        b : 2,
        c : 3,
        d : [1,3,4,7]
    }
}
console.log(clone(test));*/
