//Valid Arrays
[33, 91, 13, 9, 23]
[null, "", undefined, []]
[3.14, "pi", 3, 1, 4, "Yum, I like pie!"]
//with curley bracket sor no commas, it is invalid

//Create an array called udaciFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.
// your code goes here
var udaciFamily = ["Julia", "James", "Cherie"]

console.log(udaciFamily);

// Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . You don't need to type out the actual strings, just use the provided variables.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

//Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
//var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0]=10; 
prices[2]=20;
prices[6]=30;

console.log(prices);

//What is the length of the following inventory array?
var inventory = [
    ["gold pieces", 25],
    ["belt", 4],
    ["ring", 1],
    ["shoes", 2]
  ];

  console.log(inventory.length); //4 

  //Colors of the Rainbow
  // Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

  // Remove "Blackberry"
  // Add "Yellow" and "Green"
  // Add "Purple"

  var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(-2, 1, "Yellow", "Green"); 
rainbow.splice(rainbow.length, 0, "Purple"); 
console.log(rainbow);


  //Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(team){
    if (team.length >= 7){
        return true;
    }
    else {
        return false;
    }
}

//Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push("Simon", "River", "Book");
console.log(crew);

//reverse var reverseMe = ["h", "e", "l", "l", "o"];
var reverseMe = ["h", "e", "l", "l", "o"]; 
reverse.reverseMe();

//Sort this
var sortMe = [2, 1, 10, 7, 6];
sortMe.sort();

//use a variable to represent the index in the array, and then loop over that index to perform whatever manipulations your heart desires.
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

