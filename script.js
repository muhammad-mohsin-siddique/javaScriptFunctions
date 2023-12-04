/*

*Assignment 1: Simple Sum*

Create a function named `add` that takes two parameters, `a` and `b`, and logs their sum to the console. 

Call the function with different numbers to ensure it works.
*/

{
  function add(numebr1, numebr2) {
    console.log("Sum of ", numebr1, " + ", numebr2, " = ", numebr1 + numebr2);
  }

  add(5, 7);
  add(-15, -17);

  add(95, -17);
  add(-195, 170);
}

/*
*Assignment 2: Greetings*

Write a function called `greet` that takes a `name` as a parameter and logs a greeting message to the console. 
Call the function with different names.
*/

{
  function greet(name) {
    console.log("Hi, Mr/Ms/Mrs => ", name);
  }

  greet("Muhammad Mohsin Siddique");
  greet("Ali");
  greet("Alia");
  greet("Angela");
  greet("Fatima");
}

/*
*Assignment 3: Double It*

Define a function named `double` that takes a number as a parameter and logs its double to the console. 
Test the function with various numbers.
*/

{
  function double(number) {
    console.log("Double Of ", number, " = ", number * 2);
  }

  double(4);
  double(-9);

  double(150);

  double(1500);
}

/*
*Assignment 4: Even or Odd Checker*

Create a function named `isEven` that takes a number as a parameter and logs "Even" to the console if the number is even and "Odd" if it's odd. 

Test the function with different numbers.

*/

{
  function isEven(number) {
    if (number % 2 === 0) console.log("Entered Number => ", number, " is EVEN");
    else console.log("Entered Number => ", number, " is ODD");
  }

  isEven(4);
  isEven(13);
  isEven(3);
  isEven(8426);
  isEven(9871);
}

/*
*Assignment 5: Max of Two Numbers*

Define a function named `findMax` that takes two numbers as parameters and logs the larger number to the console.


Test the function with different pairs of numbers.


*/

{
  function findMax(number1, number2) {
    if (number1 > number2) console.log(number1 + " is Greater Than " + number2);
    else if (number1 === number2)
      console.log(number1 + " is Equal  " + number2);
    else console.log(number1 + " is less Than " + number2);
  }


  findMax(56, 72);
  findMax(6, -12);
  findMax(-78, -72);
  findMax(-56, 40);
  findMax(40, 40);

}

/*
*Assignment No 6: JavaScript Times Table Printer*

Create a simple JavaScript function called `printTimesTable` that takes a number as input. 
This function should display the multiplication table for that number in a user-friendly way on the console. 
Make sure the output is easy to understand for everyone.
*/

{
    function printTimesTable(number){

        document.write("<h3>Table of => ", number, "<br/><hr/></h3>");
        for(let i =1; i<=10; i++)
        {
            document.write(number + " x " + i + " = " + (i * number) + "<br/><hr/>");
        }
    }


    printTimesTable(10);
    printTimesTable(4);
    printTimesTable(67);
    printTimesTable(49);


}