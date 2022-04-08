/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "A day wasted on others is not wasted on one's self.",
    source: 'Charles Dickens',
    citation: 'A Tale of Two Cities',
    year: 1859
  },
  {
    quote: "No one is useless in this world who lightens the burdens of another.",
    source: 'Charles Dickens',
    citation: 'Our Mutual Friend',
    year: 1865
  },
  {
    quote: "There's some good in this world, Mr.Frodo… and it's worth fighting for.",
    source: 'J.R.R. Tolkien (Samwise Gamgee)',
    citation: 'Lord of the Rings',
    year: 1954
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  randomIndexNum = Math.floor((Math.random() * array.length))
  randomQuoteObject = quotes[randomIndexNum];
  return randomQuoteObject;
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/
function printQuote() { 
  randomQuote = randomQuoteObject.quote;
  return randomQuote;
}

console.log(printQuote());



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);