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