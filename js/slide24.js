function leapYear(){

    userYearInput=prompt("Enter your Year")
    Number(userYearInput)

    if (userYearInput % 4 != 0){
        document.write("This is a common year")
    }
    else if (userYearInput % 100 !== 0)
    {
        document.write("This is a leap year!")
    }
    else if (userYearInput % 400 !== 0)
    {
        document.write("This is a common year")
    }
    else 
    {
        document.write("This is a leap year!")
    }

}

leapYear()