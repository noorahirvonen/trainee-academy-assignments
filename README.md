## trainee-academy-assignments
# Frontend portfolio - Noora Hirvonen

This repository includes some examples of my working skills with JavaScript picked from coursework assignments provided by BuuttiEdu. More importantly, the examples showcase my algorithmic thinking ability. 
A short overview of the examples, or assignments, is provided in this document, and the executable versions are found in the repository. I have included the instructions as written in the assignments, and some introductory words by myself, as well as short descriptions of why I wrote the code as I did. 

___

## Assignment: Reverse words

The task here was to figure out an appropriate sorting algorithm to reverse words in a given sentence, without altering the the order of the words, which made the code slightly more advanced than simple reversing.  

*Create a function `reverseWords` that reverses each word in a string, but does not reverse the order of the words in the string.*

```js
const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
```

The first thing in this assignment is how to deal with the words separately, since by default the string is read as a single entity. I used the JS capability to read strings like arrays, and the 'split' -method to use breaks as its parameters.

```js
function reverseWords(lause) {
  const lauseToArray = lause.split(" ");
  let wordsReversed = "";
```

The array is then transformed with a sorting algorithm and stored temporarily into a new parameter.

```js
for (let i = 0; i < lauseToArray.length; i++) {
    let word = lauseToArray[i];
    for (let j = word.length - 1; j >= 0; j--) {
      wordsReversed += word.charAt(j);
    }
    wordsReversed += " ";
  }
  return wordsReversed;
}
```
The words are returned from sorting into a returning parameter, which is initiated as a string, and a break is added between every completion of the first loop (ie. word), so that the result is a string with desired properties.

https://github.com/noorahirvonen/trainee-academy-assignments/blob/0be2083825dd3bfb17bfc815bb7dcf5266747f64/reverse-words.js
___

## Assignment: Dumb chatbot

The assignment was to create a chatbot command line program with pre-determined commands, and their respective resulting output. I have referenced the assignment here shortly, but I left most of the instructions out, since they were mainly descriptive of what the various commands should do. The code used in executing these tasks was left up to the writer to decide.

The instructions introduced a readline-sync package, which makes user input possible.

### The command line application
*This is a really common exercise that almost every programmer does at some point in their career. The reason it’s so common, is because through this you have to use a lot of different types of variables and various operations.*

After the startup lines, I have initiated some parameters I will need in the code. 

```js
// Chatbot

import readline from 'readline-sync';
console.log('Hi! I\'m a dumb chatbot.\nYou can check all the things I can do by typing \'help\' .');

let botDefaultName = 'HAL';
let botNewName = '';
let counter = 0;
let answer;
```

I needed to figure what kind of loop to use for the program execution. I decided intuitively to use the 'while' loop, and the quit command to terminate it. Thus, the bot will keep asking commands until told to stop. With every executed loop, a counter is added to keep note of the sum of commands.
A switch-case -loop would be more efficient memorywise, but in this scale there is no practical difference. With growing number of commands, it would be better to use a different method here.
After defining the loop, all the different commands are written after an 'if' clausule, that checks the command literal. After doing whatever we wanted that command to do, the segment ends with a 'continue' to start the loop over. 

```js
while (answer !== 'quit') {
    answer = readline.question('\nGive me a command: ');
    counter += 1;
    if (answer === 'help') {
        console.log('----------------------------------------\n'); // The commands listed
        continue;
```

Mostly the commands were executable by simple 'if-else' structures, but producing the random results for *forecast* -command required some googling, and consecutive use of Javascript methods, as writing a randomizing algorithm from scratch would've been rather difficult.

```js
 if (answer === 'forecast') {
        const temperature = Math.floor(Math.random() * 32);
        console.log('Tomorrow\'s weather will be...');
        console.log(`Temperature: ${temperature} \u00B0C`);

        const weatherType = ['Cloudy', 'Sunny', 'Windy'];
        const choices = ['yes', 'no'];
        for (const type of weatherType) {
            const random = Math.floor(Math.random() * choices.length);
            console.log([type] + ` : ${(random, choices[random])}`);
        }
        continue;
```

https://github.com/noorahirvonen/trainee-academy-assignments/blob/4d3be23b0baf61e0edd1ed05b6c75487a85b8720/dumb_chatbot.js
___

