const words = ['table','management','jumble','young','rude','simple',
'condition','microservices','scrumble','bracelet','javascript', 'html',
 'css', 'python', 'java', 'ruby', 'php', 'swift', 'chair','blanket',
 'cupboard','matress','bedsheet','shirt','bottle','suitcase','laptop',
 'bed','charger','earphone','bucket','umbrella','towel','lamp','speaker',
 'bag','lunch','shoes','teeth','smooth','confuse','mistake','sin','tranquility',
 'grudges','felicity','surrounding','sanity','pillow','cushion','quilt','guilty',
 'instagram','platinum','diamond','bangle','jingle','twinkle','clause','workshop',
 'cardboard','presentation','website','lock','hat','chain','torch','sanitizer',
 'cotton','assignment','attendance','internal','external','administration','playground'
 ,'polish','tarnish','turmeric','orange','tamarind','cookie','books'];

let currentWord, scrambledWord;

function select() {
  return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayS() {
  currentWord = select();
  scrambledWord = scrambleWord(currentWord);
  document.getElementById('word').innerText = scrambledWord;
}

function checkGuess() {
  const guess = document.getElementById('guess').value.toLowerCase();
  if (guess === currentWord) {
    document.getElementById('message').innerText = 'Correct!';
  } else {
    document.getElementById('message').innerText = 'Incorrect. Try again!';
  }
}

document.getElementById('submit').addEventListener('click', checkGuess);
document.getElementById('new-word').addEventListener('click', () => {
  displayS();
  document.getElementById('guess').value = '';
  document.getElementById('message').innerText = '';
});


// Initialize game
displayS();