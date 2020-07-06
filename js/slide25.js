function month(){
    monthYearInput=prompt("Enter year then month")
    monthYearArray=monthYearInput.split(" ")
    
    yearInput=Number(monthYearArray[0])
    monthInput=Number(monthYearArray[1])
    
    if(monthInput == 1 || monthInput == 3 || monthInput ==5 || monthInput == 7 || monthInput== 8 || monthInput == 9 || monthInput == 11 || monthInput == 12)
    {
        document.write("This month has 31 days")
    }
    else if((monthInput == 2) && (yearInput % 400 == 0 || yearInput % 4 == 0 && yearInput % 100 != 0))
    {
        document.write("This month has 29 days")
    }
    else if(monthInput == 2)
    {
        document.write("This month has 28 days")
    }
    else
    {
        document.write("This month has 30 days")
    }
}
 month()





