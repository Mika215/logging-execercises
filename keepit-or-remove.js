console.log('--An online phrase editor =a program that EDITES or REPEATS phrases written in latin alphabets ');
console.log('--gathering phrase--');
let phrase = null;
console.log('-I/O loop- prompting for a phrase')
while (phrase === null) {
  phrase = prompt('enter a phrase');
 
}
 console.log('phrase:',phrase)
console.log('user confirmation either to keep only the letters or to repeat phrase without removing any numbers')
const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

let newPhrase = '';
console.log('conditional deciding the"newPhrase"')
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  console.log('--user decieded to keep only letters of the phrase =>',phrase);
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
      console.log(character);
      
    }
  }
} else {
  console.log('user decieded to repeat the phrase: "'+ phrase + '" without removing numbers');
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
    console.log(character);
  }
  
}

alert(newPhrase);
console.log('--communicating back the newPhrase:"'+newPhrase+'"--');
console.log('--all done - goodbye!--');
