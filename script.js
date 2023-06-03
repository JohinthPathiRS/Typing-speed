var text = "The quick brown fox jumps over the lazy dog. Lazy dog managed to escape for a short amount of time but the fox chased and successfully catched the dog";
var input = document.getElementById("input");
var quote = document.getElementById("quote");
var result = document.getElementById("result");

function generateQuote() {
  quote.textContent = text;
}

function checkText() {
  var enteredText = input.value;
  var words = enteredText.trim().split(" ");
  var quoteWords = text.split(" ");

  var correctWords = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === quoteWords[i]) {
      correctWords++;
    }
  }

  var accuracy = (correctWords / quoteWords.length) * 100;
  accuracy = accuracy.toFixed(2); // Round to 2 decimal places

  var wordsPerMinute = (words.length / 5).toFixed(0); // Assuming an average of 5 characters per word

  result.textContent = "Accuracy: " + accuracy + "% | Words per minute: " + wordsPerMinute;
}

function restartTest() {
  input.value = "";
  result.textContent = "";
  generateQuote();
}

generateQuote();
