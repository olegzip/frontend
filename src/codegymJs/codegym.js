function fizzBuzz() {
    let arr = [];
    for (let i = 0; i < 99; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i] = "FizzBuzz";
        } else if (i % 3 === 0) {
            arr[i] = "Fizz";
        } else if (i % 5 === 0) {
            arr[i] = "Buzz";
        } else {
            arr[i] = i;
        }
        return arr;
    }
    console.log(arr);
}