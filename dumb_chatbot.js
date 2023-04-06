// Dumb chatbot

import readline from 'readline-sync';

console.log('Hi! I\'m a dumb chatbot.\nYou can check all the things I can do by typing \'help\' .');

let botDefaultName = 'HAL';
let botNewName = '';
let counter = 0;
let answer;

while (answer !== 'quit') {
    answer = readline.question('Give me a command: ');
    counter += 1;
    if (answer === 'help') {
        console.log('----------------------------------------\n',
            'Here\'s a list of commands that I can execute!\n\n',
            'help: opens this dialog\n',
            'hello: I will say hello to you\n',
            'botInfo: I will introduce myself\n',
            'botName: I will tell you my name\n',
            'botRename: you can rename me\n',
            'forecast: I will forecast tomorrow\'s weather 100% accurately', '\n',
            'quit: quits the program\n',
            '----------------------------------------');
        continue;
    } if (answer === 'hello') {
        const name = readline.question('What is your name?');
        if (name === '') {
            console.log(`Hello, stranger.`);
        } else {
            console.log(`Hello, ${name}.`);
        }
        continue;
    } if (answer === 'botInfo') {    
        console.log(`I am just a dumb bot, but you can ask me some questions via the commands listed in 'help'. You have asked me already ${counter} question(s.`);
        continue;
    } if (answer === 'botName') {      
        if (botNewName === '') {
            console.log(`My name is currently ${botDefaultName}; if you want to change it, type 'botRename'.`);
        } else {
            console.log(`My name is currently ${botNewName}. If you want to change it, type 'botRename'.`);
        }
        continue;
    } if (answer === 'botRename') {
        let rename;
        do {
            botNewName = readline.question('Type my new name, please.');
            rename = readline.question(`Are you happy with the name ${botNewName}? (y/n)`);
        } while (rename === 'n'); 
        if (rename === 'y') {
            console.log(`I was renamed to ${botNewName}. Thanks a lot.`);
            continue;
        } else {
            botNewName = botDefaultName;
            console.log('I didn\'t get that. I will go by my original name.');
            continue;
        }
    } if (answer === 'forecast') {
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
    }
}

