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
    author: 'Charles Dickens',
    year: 1859,
    quote: "A day wasted on others is not wasted on one's self."
  },
  {
    author: 'Charles Dickens',
    year: 1865,
    quote: "No one is useless in this world who lightens the burdens of another.",
  },
  {
    author: 'J.R.R. Tolkien (Samwise Gamgee)',
    year: 1954,
    quote: "There's some good in this world, Mr.Frodo… and it's worth fighting for."
  }
]

console.log(quotes);
console.log(quotes[0].author);



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);