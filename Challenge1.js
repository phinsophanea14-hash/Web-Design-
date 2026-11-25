function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    if(width<=0 || height<=0){
    return rectangleString;
    }
    for(let i=0;i<width;i++){
        for(let j=0;j<height;j++){
            rectangleString+='*';
        }
        rectangleString+='\n';

    } return rectangleString;

} console.log(challenge1(5,2))
