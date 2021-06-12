console.log('--word searching program--');
let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  console.log('--I/O loop, Prompting to collect phrase--');
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    console.log('--user did not enter something--');
    continue;
  }

  console.log('--asking for user confirmation of the entered phrase:"'+ phrase +'"--');
  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
}
console.log('--verifying if user want a case sensitive search--');
const caseSensitive = confirm('do you want a case-sensitive search?');

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  console.log('--I/O loop, Prompting to collect the key word to be searched inside the phrase:"'+ phrase +'"--');
  query = prompt('enter a search query, this program will check if it exists in your phrase');
  if (query === null) {
    console.log('--user did not enter something--');
    continue;
  }
console.log('--asking for user confirmation if:"'+ query +'"is the needed keyword to be searched--');
  userConfirmedQuery = confirm('is this correct: "' + query + '"');
}

let phraseIncludesQuery;
if (caseSensitive) {
  console.log('--user enabled a case sensitive search--');
  phraseIncludesQuery = phrase.includes(query);
} else {
  console.log('--non-case-sensitive search mood selected--');
  let lowerCasePhrase = phrase.toLowerCase();
  let lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  console.log('--Success!"'+phrase+'" includes "'+query+'"--');
  doesOrNot = 'does';
} else {
  console.log('--Failure!"'+phrase+'" Does NOT include "'+query+'"--');
  doesOrNot = 'does not';
}
console.log('--displaying back search results to the user--');
alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive
);
console.log('--all done!--');