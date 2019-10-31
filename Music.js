import allQuestions from "./songs.js";

//   https://media.giphy.com/media/r0XKA03tGOrGU/giphy.gif

// // DOM VARS
const btnsGenre = document.querySelectorAll(".container-btn .btn");
const btna = document.querySelectorAll(".link");
const containerQuizz = document.querySelector(".container-quizz");
const containerBack = document.querySelector("#container_background");
const containerGenres = document.querySelector(".music-style");
const resetButtonLogo = document.getElementById("reset-logo");
const resetButtonLink = document.getElementById("reset-link");
const popupFinal = document.getElementById("popup-final");
var loader = document.getElementById("loader");

const tpl = `<h1 id="title_quizz_genre">
      Welcome to the <span id="genre"></span> quizz 
    </h1>
    <button id="start_game">Start game</button>`;

// GAME VARS
var currentIndex = 0;
var currentQuestions;
var score = 0;
var audio;
var roundIndex;

var filteredSongsbyGenre = [];

function filterByGenre(songs, genre) {
  for (var i = 0; i < songs.length; i++) {
    if (songs[i].genre.toLowerCase().includes(genre.toLowerCase())) {
      filteredSongsbyGenre.push(songs[i]);
    } else if (genre === "RANDOM") {
      filteredSongsbyGenre.push(songs[i]);
    }
  }
  return filteredSongsbyGenre;
}

function displayQuizzGenre(genre) {
  containerQuizz.querySelector("#genre").textContent = genre;
}

function blockAnswers(mode) {
  const answers = document.querySelector("#answers");
  if (answers) {
    answers.style.pointerEvents = mode === "off" ? "none" : "auto";
  }
}

function displayRoundQuestion() {
  audio = new Audio("./" + filteredSongsbyGenre[currentIndex].url);
  audio.play();

  //   setTimeout(() => {
  //     audio.pause();
  //   }, 120000);

  function generateTemplate() {
    containerQuizz.innerHTML = `<p class="title">Who's the singer?</p>
    <div id="answers">
        <button class="btn">${
          filteredSongsbyGenre[currentIndex].artists[0]
        }</button>
        <button class="btn">${
          filteredSongsbyGenre[currentIndex].artists[1]
        }</button>
        <button class="btn">${
          filteredSongsbyGenre[currentIndex].artists[2]
        }</button>
    </div>
    <div><p>Lyrics</p>
      <div id="lyrics"></div>
    </div>
    <div id="volume">
    <div id="controls">
        <button id="btn_pause">pause</button>
        <button id="btn_play">play</button>
        <input id="song_volume" type="range" min="0" max="1" step="0.1">
    </div>
    <button id="next_question" class="">Next Song</button>
    </div>
    </div>
    <div id="score">Score</div>`;
  }

  function listenAnswers() {
    const btns = document.querySelectorAll("#answers .btn");
    const nextButton = document.querySelector("#next_question");

    blockAnswers("on");

    btns.forEach(btn => {
      btn.onclick = function(evt) {
        blockAnswers("off");

        if (
          filteredSongsbyGenre[currentIndex].answer === evt.target.textContent
        ) {
          score++;
          //   document.getElementById("btn").style.backgroundColor = "#A9A9A9";
        }
        console.log(score);

        audio.pause();

        currentIndex++;
        // setTimeout(function() {
        if (currentIndex < filteredSongsbyGenre.length) {
          nextButton.onclick = displayRoundQuestion;
          audio.pause();
        } else finishGame();
        // }, 2000);
      };
    });
  }

  generateTemplate();
  listenAnswers();

  document.getElementById("btn_pause").onclick = function() {
    audio.pause();
  };
  document.getElementById("btn_play").onclick = function() {
    audio.play();
  };
  document.getElementById("song_volume").oninput = function(evt) {
    audio.volume = evt.target.value;
  };

  function displayScore(score) {
    document.getElementById("score").textContent = "Points : " + score;
  }

  displayScore(score);
}

function finishGame() {
  if (score > 7) {
    containerQuizz.textContent = `Congratulations your score is ${score} / ${filteredSongsbyGenre.length}`;
    containerQuizz.innerHTML += `<img src="https://media.giphy.com/media/r0XKA03tGOrGU/giphy.gif"/>`;
  } else {
    containerQuizz.textContent = `Your score is ${score} / ${filteredSongsbyGenre.length}
        It could be better ! 
        Let's try another round ;)`;
    containerQuizz.innerHTML += `<img src="https://media.giphy.com/media/ckGndVa23sCk9pae4l/giphy.gif">`;
  }
  console.log("End of the Round");
}

function resetGame() {
  filteredSongsbyGenre = [];
  containerQuizz.classList.add("is-hidden");
  containerGenres.classList.remove("is-hidden");
  score = 0;
  audio.pause();
}

function initContainerQuizz() {
  const tpl = `<h1 id="title_quizz_genre">
      Welcome to the <span id="genre"></span> quizz 
    </h1>
    <button id="start_game">Start game</button>`;
  containerGenres.classList.add("is-hidden");
  containerQuizz.classList.remove("is-hidden");
  containerQuizz.innerHTML = tpl;
  const startButton = document.querySelector("#start_game");
  displayQuizzGenre(genre);
  startButton.addEventListener("click", displayRoundQuestion);
}
function goNextROund() {}

// // EVENT LISTENERS....

resetButtonLogo.onclick = resetGame;
resetButtonLink.onclick = resetGame;

btnsGenre.forEach(btn => {
  btn.onclick = evt => {
    const genre = evt.target.textContent;
    console.log(genre);
    const questionsFilteredByGenre = filterByGenre(allQuestions, genre);
    console.log(questionsFilteredByGenre);
    initContainerQuizz();
    console.log(initContainerQuizz);
    containerQuizz.querySelector("#genre").textContent = genre;
    containerQuizz.style.background = `url("Images/${genre}.jpg")`;
    containerQuizz.style.backgroundSize = `cover`;
    containerQuizz.style.backgroundRepeat = `no-repeat`;
  };
});

// function PopupImage(img) {
//   w = open(
//     "",
//     "image",
//     "weigth=toolbar=no,scrollbars=no,resizable=yes, width=510, height=210"
//   );
//   w.document.write(
//     '<HTML><BODY onblur="window.close();"><IMG src=\'' + img + "'>"
//   );
//   w.document.write("</BODY></HTML>");
//   w.document.close();
// }
