/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 * Create an array of objects each containing a quote, a source, and some containing a citation and/or year. 
***/
const quotes = [
  {
    quote: "A day wasted on others is not wasted on one's self.",
    source: 'Charles Dickens',
    citation: 'A Tale of Two Cities',
    year: 1859,
    tags: 'books'
  },
  {
    quote: "No one is useless in this world who lightens the burdens of another.",
    source: 'Charles Dickens',
    citation: 'Our Mutual Friend',
    year: 1865,
    tags: 'books'
  },
  {
    quote: "There's some good in this world, Mr.Frodo… and it's worth fighting for.",
    source: 'J.R.R. Tolkien (Samwise Gamgee)',
    citation: 'Lord of the Rings',
    year: 1954,
    tags: 'movies'
  },
  {
    quote: "It is better to offer no excuse than a bad one.",
    source: "George Washington",
    tags: 'presidents'
  },
  {
    quote: "To ease another's heartache is to forget one's own.",
    source: "Abraham Lincoln",
    tags: 'presidents'
  }
]


/***
 * `getRandomQuote` function returns a random element in an array provided as a parameter. 
 *    
 * Generates a random number from 0 to the array's length and stores it in the variable `randomIndexNumber`.
 * Uses the `randomIndexNumber` variable to select a random array element; stores the element in variable `randomArrayElement`.
***/

function getRandomQuote(array) {
  let randomIndexNumber = Math.floor((Math.random() * array.length));
  let randomArrayElement = array[randomIndexNumber];
  return randomArrayElement;
}


/***
 * `printQuote` function - sets the HTML equal to the string generated using the random quote
 * 
 * Pass `getRandomQuote` function and store the random quote element in a variable
 * Build a string containing each parameter found in the quote object, and concatenate into a single string.
 *    Use if statements to test whether the selected quote object contains certain parameters; add them to sring `stringToPrint` if they exist
 * Set the html element `quote-box` equal to the value of variable `stringToPrint` and return the function
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  stringToPrint = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    stringToPrint += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) { 
    stringToPrint += `<span class="year">${randomQuote.year}</span>`;
  } 
  if (randomQuote.tags) {
    stringToPrint += `
    <br>
    <br>
    <span class="tags">${randomQuote.tags}</span>`
  }

  stringToPrint += `</p>`;

  return document.getElementById('quote-box').innerHTML = stringToPrint;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);