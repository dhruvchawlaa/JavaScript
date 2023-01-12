let rand = Math.floor(Math.random() * 100);
let inp;
let chances = 0;
do {
  inp = prompt("Enter your guess ");
  chances++;
  if (inp > rand) {
    alert("Try a lower number!")
  }
  else if (inp < rand) {
    alert("Try a greater number!")
  }
  else {
    alert("You guessed the correct number!")
  }
} while (inp != rand)
alert("You guessed it in " + chances + " guesses")