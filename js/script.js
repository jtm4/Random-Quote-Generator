
/**
 * Selects and returns a random quote
 * @param {array} array array of quotes 
 */
function getRandomQuote(array) {
  let random = Math.floor((Math.random() * array.length));
  let randomIndex = array[random];
  return randomIndex;
}


/**
 * Displays random quote on the page with random background color
 * @returns {object} HTML object element
 */
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

  document.getElementById('quote-box').innerHTML = stringToPrint;
  document.body.style.backgroundColor = randomRGBColor();

}


/**
 * Generates a random RGB color
 * @returns random RGB color
 */
function randomRGBColor() {
  let randomRed = Math.floor((Math.random() * 256));
  let randomGreen = Math.floor((Math.random() * 256));
  let randomBlue = Math.floor((Math.random() * 256));
  const opacity = 0.7;
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue}, ${opacity})`;
}


/** Click event listener for New Quote button */
document.getElementById('load-quote').addEventListener("click", printQuote, false);


setInterval(printQuote, 7000);