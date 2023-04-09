// Reverse words : a sorting algorithm

function reverseWords(lause) {
  const lauseToArray = lause.split(" ");
  let wordsReversed = "";
  for (let i = 0; i < lauseToArray.length; i++) {
    let word = lauseToArray[i];
    for (let j = word.length - 1; j >= 0; j--) {
      wordsReversed += word.charAt(j);
    }
    wordsReversed += " ";
  }
  return wordsReversed;
}

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed);
