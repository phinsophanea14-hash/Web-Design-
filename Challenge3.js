function challenge3(arr){
 if (arr.length === 0) {
        return 0;
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}
console.log(challenge3([81, 90, 78, 92]));
