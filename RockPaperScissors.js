const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error: User must use rock, paper, or scissors as an input')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0) 
      {return 'rock'} 
  else if (randomNumber === 1)
      {return 'paper'}
  else if (randomNumber === 2)
      {return 'scissors'}
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'This game is a tie!';
}
  if (userChoice === 'rock') {
    if(computerChoice === 'scissors') {
      return 'You have won!';
      } else {
        return 'The computer has won!'
      }
  }

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer has won!';
    } else {
      return 'You have won!'
    }
}

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer has won!';
    } else {
      return 'You have won!'
    }
}

if (userChoice === 'bomb'){
  return 'You have won with the bomb....nice job cheating :D'
}
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
