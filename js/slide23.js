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
    
    function smaller3(){
    
        do{
        usersThreeNumbers= prompt("Enter 3 numbers");
        threeNumberArray= usersThreeNumbers.split(" ")
        firstNumber= Number(threeNumberArray[0])
        secondNumber=Number(threeNumberArray[1])
        thirdNumber=Number(threeNumberArray[2])
        }
        while (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber));
    
        if (firstNumber > secondNumber && thirdNumber > secondNumber)
        {
            document.write(secondNumber)
        }
        else if (secondNumber > firstNumber && thirdNumber > firstNumber)
        { 
            document.write(firstNumber);
        }
        else if (secondNumber > thirdNumber && firstNumber > thirdNumber)
        {
            document.write(thirdNumber)
        }
    }
    
      smaller3()      
    
         