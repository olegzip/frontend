let end = prompt("INPUT NUMBER:");
let result = [];

    firstLoop:
    for (let i = 1; i <= end; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue firstLoop;
        }
        result.push(i);
    }

    console.log(result);