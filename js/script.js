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
    quote: "There's some good in this world, Mr. Frodo… and it's worth fighting for.",
    source: 'Samwise Gamgee',
    citation: 'Lord of the Rings',
    year: 1954,
    tags: 'movies'
  },
  {
    quote: "It is better to offer no excuse than a bad one.",
    source: "George Washington",
    citation: 'Letter to His Niece',
    year: 1791,
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
 * Sets the HTML div element id `quote-box` equal to the string generated using the random quote
 * 
 * Pass `getRandomQuote` function and store the random quote element in a variable
 * Build a string containing each parameter found in the quote object, and concatenate into a single string.
 *    Use if statements to test whether the selected quote object contains certain other parameters; add them to `stringToPrint` if they exist
***/

function printQuote() {
  randomBackgroundColor(); // call to generate random background color on `printQuote` call

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
 * Sets the HTML body background color to random RGB value
 */

function randomBackgroundColor() {
  let randomRed = Math.floor((Math.random() * 256));
  let randomGreen = Math.floor((Math.random() * 256));
  let randomBlue = Math.floor((Math.random() * 256));
  const opacity = 0.7;
  document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue}, ${opacity})`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/**
 * Calls `printQuote` function every 7000 milliseconds (7 seconds)
 */

setInterval(printQuote, 10000);