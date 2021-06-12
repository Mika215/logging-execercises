console.log('--strings sorting program--');
console.log('--displaying the aime and instructions of the program--');
alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"'
);

let shortStrings = 'short:';
let mediumStrings = 'medium:';
let longStrings = 'long:';

while (true) {
  console.log('--prompting to collect a string data--');
  const input = prompt('enter something');

  if (input === null) {
    console.log('--user has cancelled the program--');
    break;
  }

  if (input.length < 5) {
    console.log('--user added a string to the => "shortString" list--');
    shortStrings = shortStrings + '\n- "' + input + '"';
  } else if (input.length < 10) {
    console.log('--user added a string to the => "mediumString" list--');
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    console.log('--user added a string to the => "longString" list--');
    longStrings = longStrings + '\n- "' + input + '"';
  }
}
console.log('--communicating back the sorted out complete list'+'\n\n'+shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings+'--');
alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);
console.log('--all done!--');