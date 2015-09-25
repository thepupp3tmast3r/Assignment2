//1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
//step 1 

//
//var name = window.prompt("what is your name?");
//
//window.alert(name);


//2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//step 2 

//var name = window.prompt("What is your name?");
//
//var myNumber = window.prompt(" Please choose a numeric value");
//
//window.alert(name);
//window.alert(myNumber);


//3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.



//step 3
//
//var firstName = window.prompt("What is your first name?");
//var lastName = window.prompt("What is your last name");
//
//window.alert("Your name is " + firstName + " " + lastName);


//4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//step 4 
//
//var whatDoesTheFoxSay = "The quick brown fox jumps over the lazy dog";
//
//window.alert(whatDoesTheFoxSay.indexOf("fox"));

//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//step 5 
//
//var whatDoestheFoxSay = "The quick brown fox jumps over the lazy fox";
//
//window.alert(whatDoestheFoxSay.lastIndexOf("fox"));

//6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//step 6 
//
//var whatDoesTheFoxSay = "The quick brown fox jumped over the lazy dog";
//var yourName = window.prompt("What is your name"); 
//
//window.alert("The quick brown fox jumps over " + yourName);


//7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

//step 7 
//
//var whatDoesTheFoxSay = "The quick brown fox jumps over the lazy dog";
//
//var userWord =window.prompt("Please enter a word");
//window.alert(whatDoesTheFoxSay.search(userWord));

//8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

//step 8 
//
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = (old_string.slice(31, 43));
//window.alert(new_string.toUpperCase());


//9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//step 9
//
//var whatDoesTheFoxSay = "“            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//
//window.alert(whatDoesTheFoxSay.substr(13, 50));


//10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//step 10 
//
//var str = "the quick brown fox jumps over the lazy dog"; document.write( titleCase(str) ); function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); } 



// PART 2 OF ASSIGNMENT 2


//STEP 1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
//var selectNumber = window.prompt("Enter a number:");
//window.console.log(Math.abs(selectNumber));

//STEP 2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
//var selectNumber = window.prompt("Enter a number with a decimal:");
//window.console.log(Math.ceil(selectNumber));

//STEP 3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
//var selectNumber = window.prompt("Enter a number with a decimal:");
//window.console.log(Math.floor(selectNumber));

//STEP 4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//var num1 = window.prompt("Enter number 1:");
//var num2 = window.prompt("Enter number 2:");
//var num3 = window.prompt("Enter number 3:");
//var num4 = window.prompt("Enter number 4:");
//var num5 = window.prompt("Enter number 5:");
//var maxNum = Math.max(num1, num2, num3, num4, num5);
//var minNum = Math.min(num1, num2, num3, num4, num5);
//window.console.log("Min: " + minNum + "\nMax: " + maxNum);

//STEP 5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
//var selectNumber = window.prompt("Enter a number:");
//window.console.log(Math.sqrt(selectNumber));


// Part 2


//STEP 6.	Create an application that gets the current date. Display that result within the console window.
//var today = new Date();
//window.console.log(today.toDateString());

//STEP 7.	Create an application that gets the number of days in a month. Display that result within the console window.
//var myDate = new Date();
//myDate.setMonth(10);
//switch (myDate.getMonth()) {
//  case 0:
//    window.console.log("Jan has " + 31 + " days");
//    break;
//  case 1:
//    window.console.log("Feb has " + 28 + " days");
//    break;
//  case 2:
//    window.console.log("Mar has " + 31 + " days");
//    break;
//  case 3:
//    window.console.log("Apr has " + 30 + " days");
//    break;
//  case 4:
//    window.console.log("May has " + 31 + " days");
//    break;
//  case 5:
//    window.console.log("Jun has " + 30 + " days");
//    break;
//  case 6:
//    window.console.log("Jul has " + 31 + " days");
//    break;
//  case 7:
//    window.console.log("Aug has " + 31 + " days");
//    break;
//  case 8:
//    window.console.log("Sep has " + 30 + " days");
//    break;
//  case 9:
//    window.console.log("Oct has " + 31 + " days");
//    break;
//  case 10:
//    window.console.log("Nov has " + 30 + " days");
//    break;
//  case 11:
//    window.console.log("Dec has " + 31 + " days");
//    break;
//default:
//    window.console.log("Your date does not seem to exist");

//STEP 8.	Create an application that gets the month name from a particular date. Display that result within the console window.
//var myDate = new Date();
//myDate.setMonth(1);
//switch (myDate.getMonth()) {
//  case 0:
//    window.console.log("Janurary");
//    break;
//  case 1:
//    window.console.log("Febuary");
//    break;
//  case 2:
//    window.console.log("March");
//    break;
//  case 3:
//    window.console.log("April");
//    break;
//  case 4:
//    window.console.log("May");
//    break;
//  case 5:
//    window.console.log("June");
//    break;
//  case 6:
//    window.console.log("July");
//    break;
//  case 7:
//    window.console.log("August");
//    break;
//  case 8:
//    window.console.log("Septemper");
//    break;
//  case 9:
//    window.console.log("October");
//    break;
//  case 10:
//    window.console.log("November");
//    break;
//  case 11:
//    window.console.log("December");
//    break;
//  default:
//    window.console.log("Your date does not seem to exist.");
//}

//STEP 9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
//var myDate = new Date();
////myDate = new Date(2015, 8, 19); // saturday
////myDate = new Date(2015, 8, 20); // sunday
////myDate = new Date(2015, 8, 21); // monday
//if (myDate.getDay() === 6 || myDate.getDay() === 0) {
//  window.console.log("This IS a weekend.");
//} else {
//  window.console.log("This is NOT a weekend.");
//}


//STEP 10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
//var myDate = new Date();
//var day = "";
//myDate.setDate(myDate.getDate() - 1);
//
//switch (myDate.getDay()) {
//case 0:
//  day = "Sunday";
//  break;
//case 1:
//  day = "Monday";
//  break;
//case 2:
//  day = "Tuesday";
//  break;
//case 3:
//  day = "Wednesday";
//  break;
//case 4:
//  day = "Thursday";
//  break;
//case 5:
//  day = "Friday";
//  break;
//case 6:
//  day = "Saturday";
//  break;
//}
//window.console.log(day);

//STEP 11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
//var myDate = new Date();
//window.console.log(myDate.toDateString().slice(0, 1));


// Part 3


////12 Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
//var int1 = window.prompt("Pick an integer ");
//var int2 = window.prompt("Pick another integer ");
//window.console.log(Math.max(int1, int2));

////13 Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
//var students = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
//var grades = [80, 77, 88, 95, 68];
//var i = 0;
//function getLetterGrade(score) {
//  'use strict';
//  if (score < 60) {
//    return "F";
//  } else if (score < 70) {
//    return "D";
//  } else if (score < 80) {
//    return "C";
//  } else if (score < 90) {
//    return "B";
//  } else {
//    return "A";
//  }
//}
//for (i = 0; i < students.length; i += 1) {
//  window.console.log(students[i] + " : " + getLetterGrade(grades[i]));
//}

//14 Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
//function getEvenOdd(num) {
//  'use strict';
//  if (num % 2 === 0) {
//    return "Even";
//  } else {
//    return "Odd";
//  }
//}
//var i;
//for (i = 1; i <= 15; i += 1) {
//  window.console.log(i + " : " + getEvenOdd(i));
//}

////15 Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
//var i;
//var fizzBuzz;
//
//for (i = 1; i <= 100; i += 1) {
//  fizzBuzz = getFizzBuzz(i);
//  if (fizzBuzz === "") {
//    window.console.log(i);
//  } else {
//    window.console.log(fizzBuzz);
//  }
//}
//
//// returns the FizzBuzz text or an empty string
//function getFizzBuzz(num) {
//  'use strict';
//  var strOut = "";
//  if (num % 3 === 0) {
//    strOut = "Fizz";
//  }
//  if (num % 5 === 0) {
//    strOut += "Buzz";
//  }
//  return strOut;
//}


// Part 4



//1. Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//var readyToPlay = false;
//readyToPlay = window.confirm("Ready to play?");
//if (readyToPlay) {
//  window.alert("Awesome, our hero is waiting!");
//} else {
//  window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}

//2. Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty.\n\nYou see a speck of light in the distance ahead of you,\nsomething shimmering to your right,\nand the sound of running water to your left.\nYour back is against the wall…\n");

//3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//var direction = window.prompt("Which direction would you like to head\n\nPlease enter forward, left, or right.");
//direction = direction.toLowerCase();

//4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
//switch (direction) {
//case "forward":
//  window.alert("You walk about 100 yards and safely make your way out of the cave.");
//  break;
//case "left":
//  window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//  break;
//case "right":
//  window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//  break;
//default:
//  window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}

////5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
////6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
//var rating = window.prompt("Please rate this game on a scale of 1 to 10.");
//if (rating < 1 || rating > 10) {
//  rating = 10;
//}
//if (rating >= 6 && rating <= 10) {
//  window.alert("Thank you, we will continue to make improvements to the game!");
//} else {
//  window.alert("Whatever, you weren’t very good at this game anyway!");
//}


// Part 5


//1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
////var coinFlip = Math.random();            
//var coinFlip = Math.round(Math.random()); 


//2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//var choice = window.prompt("Coin Flip Game\nHeads or Tails:").toLowerCase();
// to take care of mispellings: if the first char entered is 'h' or 't' then equals 'heads' or 'tails'
//if (choice.slice(0, 1) === "h") {
//  choice = "heads";
//}
//if (choice.slice(0, 1) === "t") {
//  choice = "tails";
//}


//3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
//var result;
//if (coinFlip < 0.5) {   
//if (coinFlip) {         
//  result = "heads";
//} else {
//  result = "tails";
//}

//4. If the result is heads and the user selects heads, display the following message within an alert: 
//The flip was heads and you chose heads...you win!

//5. If the result is heads and the user selects tails, display the following message within an alert: 
//The flip was heads but you chose tails...you lose!
//6. If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
//7. If the result is tails and the user selects tails, display the following message within an alert: 
//The flip was tails and you chose tails...you win!


//if (result === choice) {
//  window.alert("The flip was " + result + " and you chose " + choice + "...you win!");
//} else {
//  window.alert("The flip was " + result + " and you chose " + choice + "...you lose!");
//}



//8. Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.


// Part 6


//1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.


//2. Create a for loop that loops 10 times.


//3. Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.


//4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 


//var coinFlip;
//var i;
//for (i = 1; i <= 10; i += 1) {
//  coinFlip = Math.round(Math.random());
//  if (coinFlip) {
//    window.console.log("Flip " + i + ": Heads");
//  } else {
//    window.console.log("Flip " + i + ": Tails");
//  }
//}


// Part 7


//1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.


//2. Create a do while loop.


//3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.


//4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 


//5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
//var coinFlip;
//do {
//  coinFlip = Math.round(Math.random());
//  if (coinFlip) {
//    window.console.log("Heads");
//  } else {
//    window.console.log("Tails");
//  }
//} while (coinFlip);


// Part 8

// Write a loop that displays the following triangle within a console window:
//var triangleHeight = 7;
//var i;
//var out = "";
//for (i = 0; i < triangleHeight; i += 1) {
//  strOut += "#";
//  window.console.log(out);
//}



// Part 9

// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//var i;
//for (i = 0; i <= 15; i += 1) {
//  if ((i % 2) === 0) {
//    window.console.log(i + " is even");
//  } else {
//    window.console.log(i + " is odd");
//  }
//}
