let highAndLow ="1 2 3 4 5";
let highAndLow2 ="1 2 -3 4 5";
let highAndLow3 ="1 9 3 4 -5";

    // let newArray = Array.from(highAndLow);

    let searchMin = function(str) {
        let result = [];
        let replaced = str.split(' ').map(i => +i);
        let newArray = Array.from(replaced);

        newArray.sort((a, b) => a - b)


        result.push(newArray[newArray.length - 1]);
        result.push(newArray[0]);
        let lastResult = result.join(' ');

        console.log(newArray);
        console.log(lastResult);

        



    }

