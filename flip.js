function flipInteger(userInput){
    userInput = -(userInput)  //  For example : -1 x 5 = -5 and -1 x -4 = 4
    return userInput;
}

console.log("Flipped integer is " + flipInteger(-23));