
/**
 * Selects and returns a random quote
 * @param {array} array array of quotes 
 * @returns randomly selected array
 */
function getRandomQuote(array) {
  let randomIndexNumber = Math.floor((Math.random() * array.length));
  let randomArrayElement = array[randomIndexNumber];
  return randomArrayElement;
}


/**
 * Displays random quote on the page
 * @returns {object} HTML object element
 */
function printQuote() {
  randomBackgroundColor();

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


/**
 * Generates a random RGB color
 */
function randomBackgroundColor() {
  let randomRed = Math.floor((Math.random() * 256));
  let randomGreen = Math.floor((Math.random() * 256));
  let randomBlue = Math.floor((Math.random() * 256));
  const opacity = 0.7;
  document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue}, ${opacity})`;
}


/** Click event listener for New Quote button */
document.getElementById('load-quote').addEventListener("click", printQuote, false);


setInterval(printQuote, 7000);