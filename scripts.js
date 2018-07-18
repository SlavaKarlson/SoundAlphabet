var letters = {
  'A': {file: 'a.wav', word: 'Alps'},
  'B': {file: 'b.wav', word: 'Balalaika'},
  'C': {file: 'c.wav', word: 'Clap'},
  'D': {file: 'd.wav', word: 'Door'},
  'E': {file: 'e.wav', word: 'EAGLE'},
  'F': {file: 'f.wav', word: 'F'},
  'G': {file: 'd.wav', word: 'G'},
  'H': {file: '.wav', word: 'H'},
  'I': {file: '.wav', word: 'I'},
  'J': {file: '.wav', word: 'J'},
  'K': {file: '.wav', word: 'K'},
  'L': {file: '.wav', word: 'L'},
  'M': {file: '.wav', word: 'M'},
  'N': {file: '.wav', word: 'N'},
  'O': {file: '.wav', word: 'O'},
  'P': {file: '.wav', word: 'P'},
  'Q': {file: '.wav', word: 'Q'},
  'R': {file: '.wav', word: 'R'},
  'S': {file: '.wav', word: 'S'},
  'T': {file: '.wav', word: 'T'},
  'U': {file: '.wav', word: 'U'},
  'V': {file: '.wav', word: 'V'},
  'W': {file: '.wav', word: 'W'},
  'X': {file: '.wav', word: 'X'},
  'Y': {file: '.wav', word: 'Y'},
  'Z': {file: '.wav', word: 'Z'},
  '_': {file: '.wav', word: ''},
};

function KeyboardClick(){
  var elem = event.target;
  if(elem.classList.contains('keyboard__key')){
    var letter = letters[elem.innerText];
    var input = document.getElementById('textbar');

    var myAudio = new Audio;
    myAudio.src = "Sounds/" + letter.file;
    myAudio.play();
    input.value=letter.word;
  }
};

function KeyPress(){
  if(event.keyCode >= 16 && event.keyCode <=18){
    return;
  }
  var char = String.fromCharCode(event.keyCode).toUpperCase();
  var elem = document.getElementById(char);
  var letter = letters[char];
  var input = document.getElementById('textbar');

  var myAudio = new Audio;
  myAudio.src = "Sounds/" + letter.file;
  myAudio.play();
  input.value=letter.word;
};

function KeyDown(){
  if(event.keyCode >= 16 && event.keyCode <=18){
    return;
  }
  var char = String.fromCharCode(event.keyCode).toUpperCase();
  var elem = document.getElementById(char);
  elem.classList.add('keyboard__key_pressed');
}
function KeyUp(){
  if(event.keyCode >= 16 && event.keyCode <=18){
    return;
  }
  var char = String.fromCharCode(event.keyCode).toUpperCase();
  var elem = document.getElementById(char);
  elem.classList.remove('keyboard__key_pressed');
}
