console.log('--Name displaying programme--');
console
let userInput = '';
console.log('--I/O loop prompting for a userInput--');
while (true) {
  userInput = prompt('enter your name:');
console.log("Name:",userInput);
  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    console.log('--user name cancelled/user entered nothing--');
    continue;

  }
  console.log('--confirming final user Name: '+ userInput);
  const userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}
console.log('displaying final user name=>'+userInput+'');
alert('your name is: "' + userInput + '"');
console.log('--all done!--');