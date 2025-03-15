// Chapter 21-25

// Q1)
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = alert("Hellow, " + firstName + " " + lastName);

// Q2)
var favMob = prompt("What is your favourite mobile phone?");
console.log("My favourit phone is: ", favMob);
console.log("Length of string: ", favMob.length);

// Q3)
var str = "Pakistani";
var lenthOfN = str.indexOf("n");
console.log("String: ", str);
console.log("Index of 'n' is: ", lenthOfN)

// Q4)
var str = "Hello World";
var lenthOfL = str.lastIndexOf("l");
console.log("String: ", str);
console.log("Index of 'l' is: ", lenthOfL)

// Q5)
var str = "Pakistani";
var charOf = str.charAt(3);
console.log("String: ", str);
console.log("Character at index 3 is: ", charOf);

// Q6)
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
console.log("Your Full name is: " + fullName);

// Q7)
var city = "Hyderabad";
var copyText = city.slice(0, 5);
var newText = "Islam";
var remainText = city.slice(5, 9);
var newWord = newText + remainText;
console.log("City: " + city);
console.log("After Replacement: " + newWord);

// Q8)
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceText = message.replaceAll("and", "&");
console.log(replaceText);

// Q9)
var str = 472;
var value = "472";
console.log("Value : ", str);
console.log("Type: ", typeof str);
console.log("Value : ", value);
console.log("Type: ", typeof value);

// Q10)
var userInput = prompt("Enter any fruit name:");
console.log("User Input: ", userInput);
console.log("Upper case: ", userInput.toUpperCase());

// Q11)
var userInput = prompt("Enter any name:");
var copyText = userInput.slice(0, 1).toUpperCase();
var remainText =userInput.slice(1).toLowerCase(); 
var newWord = copyText + remainText;
console.log("User Input: " + userInput);
console.log("Title Case: " + newWord);

// Q12)
var num = 35.36;
var newNum = num.toString();
newNum = newNum.replace(".", "");
console.log("Number: ", num);
console.log("Result: ", newNum);

// Q13
var userInput = prompt("Please enter your name:");
if (userInput.includes("@") || userInput.includes("!") || userInput.includes(".") || userInput.includes(",")) {
    alert("Please enter valid username");
}
else {
    alert("Hellow, " + userInput);
}

// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome ABC bakery, What do yu want to order sir/ma'am ?");
userInput = userInput.toLowerCase();
var flag = false;
for (var i = 0; i < A.length; i++) {
    if (userInput == A[i]) {
        flag = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
    }
}
if (flag == false) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// Q15


// Q16
var university = "University Of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + "\n");
}

// Q17
var userInput = prompt("Enter Any Word:");
var lastChar = userInput[userInput.length - 1];
alert("Last character of your input is: " + lastChar);

// Q18
var sentence = "The quick brown fox jumps over the lazy dog";
sentence=sentence.toLowerCase();
var count=0;
for(var i=0; i<sentence.length; i++){
    if(sentence.slice(i,i+3)== "the" ){
        count++;
    }
}
console.log("Text: The quick brown fox jumps over the lazy dog ");
console.log(`There are ${count} occurence(s) of the word 'the'.`);

// X------------------------------------------------------------------------------------------------------------------X

// Chapter 26-30

// Q1)
var num = +prompt("Enter any positive integer:");
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
console.log("Number: ", num);
console.log("Round off value: ", roundNum);
console.log("Floor Value: ", floorNum);
console.log("Ceil Value: ", ceilNum);

// Q2)
var num = +prompt("Enter any negative integer:");
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
console.log("Number: ", num);
console.log("Round off value: ", roundNum);
console.log("Floor Value: ", floorNum);
console.log("Ceil Value: ", ceilNum);

// Q3)
var num = +prompt("Enter any integer:");
var absValue = Math.abs(num);
console.log(`The absolute value of ${num} is ${absValue}`);

// Q4)
var dicevalue= Math.floor(Math.random()*6)+1;
 console.log("Random Dice value: ", dicevalue);

// Q5)
var randomNum = Math.floor(Math.random() * 3);
if (randomNum <= 1) {
    console.log(randomNum);
    console.log("random coin values: Tails");
}
else {
    console.log(randomNum);
    console.log("random coin values: Heads");
}

// Q6)
var randomNum = Math.floor(Math.random() * 100);
console.log("Random number between 1 to 100: ", randomNum);

// Q7)


// Q8)
var secretNum = 6;
var userInput = +prompt("Enter any number between 1 to 10:");
if (userInput == secretNum) {
    alert("Congrats! Your number is matched with our secret number.")
}
else {
    alert("Bad Attempt! Try again.");
}

// X-------------------------------------------------------------------------------------------------X

// Chapter 31-34

// Q1)
var date = new Date();
console.log(date);

// Q2)
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
alert("Current Month: " + monthArr[date.getMonth()]);

// Q3)
var dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var date = new Date();
var day = dayArr[date.getDay()];
var updatedDay = day.slice(0, 3);
alert("Today is: " + updatedDay);

// Q4)
var dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var date = new Date();
var day = dayArr[date.getDay()];
if (day == "Saturday" && day == "Sunday") {
    alert("Its fun Day!");
}
else {
    alert("Its working Day!");
}

// Q5)
var date = new Date();
var getdate = date.getDate();
if (getdate < 16) {
    alert("First Fifteen days of month");
}
else {
    alert("Last days of month.");
}

// Q6)
var date = new Date();
var minutes = date.getTime();
var miliseconds = date.getMilliseconds();
console.log("Current Date:" + date);
console.log("Elasped miliseconds since January 1, 1970: " + miliseconds);
console.log("Elasped minutes since January 1, 1970: " + minutes);

// Q7)
var date=new Date();
var hour=date.getHours();
if(hour<12){
    alert("It's AM");
}
else{
    alert("It's PM");
}

// Q8)
var laterDate= new Date(2020,11,0);
console.log(laterDate);

// // Q9) Again krna hai.
// var ramadanStartDate = new Date(2025, 3, 1);
// var today = new Date();
// var day = today.getDay();
// var diffDate = day - ramadanStartDate;
// alert(diffDate);

// Q10
// Q11
// Q12

// Q13
var age = +prompt("Enter your age:");
var birthYear = 2025-age;
alert("Your Birth Year is: "+ birthYear);

// Q14