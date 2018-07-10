var letters = {
  'A': {file: 'a.wav', word: 'Alps'},
  'C': {file: 'c.wav', word: 'Clap'},
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
