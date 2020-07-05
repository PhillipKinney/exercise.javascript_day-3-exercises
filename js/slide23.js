function  smaller(){
    
    do{
    usersTwoNumbers= prompt("Enter 2 numbers");
    twoNumberArray= usersTwoNumbers.split(" ")
    firstNumber= Number(twoNumberArray[0])
    secondNumber=Number(twoNumberArray[1])
    }
    while (isNaN(firstNumber) || isNaN(secondNumber));

    if (firstNumber > secondNumber){
        document.write(secondNumber)
    }else{ 
        document.write(firstNumber);
    }
    }
    
        

     smaller();