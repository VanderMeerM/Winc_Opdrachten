const findNeedle = function (words) {
    return words.findIndex(word => word==="needle");
        
};

/* 
Oplossing: 
const findNeedle = function(words, wordToBeFound) {
  return words.indexOf(wordToBeFound);
};
*/

module.exports = findNeedle;