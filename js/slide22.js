
// function isNumber(){
//     userInput1=prompt("Enter a number")
//     numberOrString=isNaN(userInput1)
//     document.write(numberOrString)
// }



// function convertToNumber(){
//     userNumber=prompt("enter number")
//     numberConverted=Number(userNumber)   
    
// }



function  smaller(){
usersTwoNumbers= prompt("Enter 2 numbers");
twoNumberArray= usersTwoNumbers.split(" ")
twoNumbers= Number(twoNumberArray);

if (twoNumberArray[0] > twoNumberArray[1]){
    document.write(twoNumberArray[1])
}else{ 
    document.write(twoNumberArray[0]);
}
}

smaller();

// if (isNaN(user)



// document.write(smaller)


 
// smaller()