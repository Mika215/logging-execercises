console.log('--Duplicates remover program--');
let phrase = null;
console.log('--I/O loop prompting for a phrase with duplicated letters--');
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed'
  );
}

let previous = '';
console.log('--"for-of" checking dubilcate charachters inside the phrase: "' +phrase+'"');
let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    
  }
  previous = next;
  console.log('--removing dubilcate charachters:"'+phrase+"=>'"+next+"'");
}

console.log('--communicating back the final output:"'+noRepetitions+'"---');
alert(noRepetitions);

console.log('--all done!--');