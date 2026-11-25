function challenge2(arr){
let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        reversedArray.push(arr[i]);

    }
    return reversedArray;
    
}
console.log(challenge2([1, 2, 3, 4]));
