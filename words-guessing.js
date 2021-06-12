console.log('--Words guessing game--');
console.log('--displaying three options of the game--');
console.log('--Prompting user to chose from the three options--');
const userInput = prompt(
  'Welcome!\n\n' +
    '"play": begin the game\n' +
    '"-h": read the instructions\n' +
    'escape: exit the game'
);

if (userInput === '-h') {
  console.log('--user reading the game-instructions--');
  alert(
    'This is a two player game.\n\n' +
      'Player 1: enters a secret phrase, and then a clue.\n' +
      'Player 2: is shown the clue and must guess the phrase.\n\n' +
      'you can end the game at any point by canceling'
  );
  
} else if (userInput === 'play') {
   console.log('--Player1 wants to start the game--');
  let winner = 'no one';

  alert('Player 2: look away! hide your eyes!');

  let secretPhrase = '';
  while (secretPhrase === '') { 
    console.log('player1 did not enter something');
    console.log('--I/O loop, prompting for secretPhrase from Player1--');
    secretPhrase = prompt('Player 1: enter a secret phrase');
   
  }
 console.log('--Player1 entered a secretPhrase:  "' +secretPhrase+'"--');
  if (secretPhrase === null) {
    alert('good bye');
    console.log('--player1 aborted the game');
    console.log('--there is no winner--');
  } else {
    let clue = '';
    while (clue === '') {
      console.log('--I/O loop, prompting player1 to enter a clue for "' +secretPhrase+'"--');
      clue = prompt('Player 1: enter a clue to help guess your phrase');
      
    }

    if (clue === null) {
      alert('good bye');
      console.log('--player1 aborted the game--');
      console.log('--there is no winner--');
    } else {
      alert(
        'Player 1: you entered ...\n\n' +
          '- phrase: "' +
          secretPhrase +
          '"' +
          '\n' +
          '- clue: "' +
          clue +
          '"'
      );
console.log('--player1 entered secret phrase:"'+ secretPhrase+ '" and a clue: "' +clue+'"');
      alert('now go get Player 2');

      let guess = '';
      while (guess === '') {
        console.log('--displaying the clue: "'+clue+ '" to player2--');
        console.log('--prompting to collect guess from player2--');
        guess = prompt(
          'Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?'
        );
      }

      if (guess === null) {
        console.log('--player2 aborted the game--');
        alert('good bye');
        console.log('--there is no winner--');
      } else if (guess === secretPhrase) {
        winner = 'Player 2';
        console.log('--player2 guessed"'+secretPhrase+'" correctly--');
        alert('Congrats, you were right!\n\n');
        console.log('--Game OVER! acknowledging player2 as the game winner--');
      } else {
        console.log('--player2 fail to guess the secretPhrase correctly--');
        winner = 'Player 1';

        console.log('--requesting confirmation from player2 to reveal the secret--');
        const revealTheSecret = confirm(
          'Nope, not correct.\n\n' + 'do you want to know the secret?'
        );
        
        if (revealTheSecret) {
          console.log('--revealing the secretPhrase: "'+secretPhrase+'" to the players before exiting--');
          alert(
            'The secret was:\n\n' +
              '- ' +
              '"' +
              secretPhrase +
              '"' +
              '\n\n' +
              'thanks for playing, see ya'
          );
          console.log('--Game OVER! acknowledging player1 as the game winner--');
        } else {
          console.log('--Player2:diclined confirmation/do not want to know the secret--');
          alert('better luck next time');
          console.log('--Game OVER! acknowledging player1 as the game winner--');
        }
      }
    }
  }
  alert('game over. the winner is: ' + winner);
} else if (userInput === null) {
  console.log('--game aborted--');
  console.log('--there is no winner--')
  alert('good bye');
 
} else {
   console.log('--an unknown command was passed--');
  alert('unknown command: "' + userInput + '"');
}
console.log('--all done!--');