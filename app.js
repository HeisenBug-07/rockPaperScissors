"use strict";

const game = () => {
  let pScore = 0;
  let cScore = 0;
  const pName = document.querySelector(".player-score h2");

  const pScoreHtml = document.querySelector(".player-score p");
  const cScoreHtml = document.querySelector(".computer-score p");

  //   initilizing game
  const startGame = () => {
    let name = prompt("Enter your Name");
    if (name === "") name = "NoOne";
    pName.innerHTML = name;
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //   playing match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    options.forEach((opt) => {
      opt.addEventListener("click", function () {
        const compOpt = ["rock", "paper", "scissors"];
        const rnd = Math.floor(Math.random() * 3);
        console.log(compOpt[rnd]);

        setTimeout(() => {
          playerHand.src = `${this.textContent}.png`;
        }, 300);
        setTimeout(() => {
          computerHand.src = `${compOpt[rnd]}.png`;
        }, 330);

        compareHands(this.textContent, compOpt[rnd]);
      });
    });
  };
  startGame();
  playMatch();

  const compareHands = function (playC, compC) {
    const msg = document.querySelector(".winner");
    msg.style.color = "white";
    if (playC === compC) msg.innerHTML = "It's a Draw";
    else if (
      (playC === "rock" && compC === "scissors") ||
      (playC === "paper" && compC === "rock") ||
      (playC === "scissors" && compC === "paper")
    ) {
      msg.style.color = "green";
      msg.innerHTML = "You win wow";
      pScoreHtml.innerHTML = ++pScore;
    } else {
      msg.style.color = "red";
      msg.innerHTML = "You lose noob";
      cScoreHtml.innerHTML = ++cScore;
    }
  };
};

game();
