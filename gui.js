import allQuestions from "./songs.js";

// DOM VARS
const btnsGenre = document.querySelectorAll(".container-btn .btn");
const containerQuizz = document.querySelector(".container-quizz");
const containerGenres = document.querySelector(".music-style");

const startButton = document.getElementById("start_game");
const resetButton = document.getElementById("reset_game");

// GAME VARS

const nextButton = document.getElementsByClassName("next");
const audio = document.querySelector(".soundtrack");

function filterByGenre(songs, genre) {
  var result = [];
  for (var i = 0; i < songs.length; i++) {
    if (songs[i].genre.toLowerCase().includes(genre.toLowerCase())) {
      result.push(songs[i]);
    }
  }
  return result;
}

function generateTemplate(question) {
  return `<p class="title">Who's the singer?</p>
    <div id="answers">
        <button class="btn">${question.artists[0]}</button>
        <button class="btn">${question.artists[1]}</button>
        <button class="btn">${question.artists[2]}</button>
    </div>
    <button id="next_question" class="">Next</button>
    </div>`;
}

function checkUserAnswer(answer) {
  console.log(answer, "score à gérer....");

  /********
   *
   * GERER LE SCORE ICI ....
   *
   */

  // faire appaitre le bouton next (css toggle)
}

function currentQuestion(question, callback) {
  containerQuizz.innerHTML = generateTemplate(question);

  const btns = containerQuizz.querySelectorAll("#answers .btn");

  btns.forEach(btn => {
    btn.onclick = function(evt) {
      checkUserAnswer(evt.target.textContent);
    };
  });

  document.getElementById("next_question").onclick = callback;
}

function toggleContainerGenre() {
  containerGenres.classList.toggle("is-hidden");
}

function toggleContainerQuizz() {
  containerQuizz.classList.toggle("is-hidden");
}

function displayQuizzGenre(genre) {
  containerQuizz.querySelector("#genre").textContent = genre;
}

function resetGame() {
  toggleContainerGenre();
  toggleContainerQuizz();
}

function finishGame() {
  console.log("finishGame");
}

function startRound(questions, roundIndex) {
  currentQuestion(questions[roundIndex], function clbk() {
    const nextIndex = roundIndex + 1;
    console.log("go to next round", nextIndex);
    if (nextIndex < questions.length) startRound(questions, nextIndex);
    else finishGame();
  });
}

function startGame(genre, questions) {
  // toggle class hidden sur choose style
  // toggle class hidden sur container quizz
  toggleContainerGenre();
  toggleContainerQuizz();
  displayQuizzGenre(genre);
  // écouter click sur start boutton
  startButton.onclick = function() {
    startRound(questions, 0);
    // @click => displayNext question`
  };
}

// EVENT Handler....

function handleGenreSelection(evt) {
  const genre = evt.target.textContent;
  const questionsFilteredByGenre = filterByGenre(allQuestions, genre);
  startGame(genre, questionsFilteredByGenre);
}

// EVENT LISTENERS....

btnsGenre.forEach(btn => {
  btn.onclick = handleGenreSelection;
});

resetButton.onclick = resetGame;
