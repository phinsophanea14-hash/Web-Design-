function challenge5(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " " && (i === 0 || text[i - 1] === " ")) {
            count++;
        }
    }

    return count;
}

console.log(challenge5("hello world")); 
console.log(challenge5("this is the best day"));
console.log(challenge5("a bb ccc ddddddd e"));