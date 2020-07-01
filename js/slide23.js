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