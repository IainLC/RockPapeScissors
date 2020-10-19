const userChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb" ){
    return userInput } else {
      console.log('Something is fucked');
    }
  };
  
  console.log(userChoice("bomb"))
  
  const computerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    switch (randomNum){
      case 0:
      return "rock";
      case 1:
      return "paper";
      case 2: 
      return "scissors";
    };
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb"){
    return "Your Bomb vaporised the opponenent. You win!";
  }
  
  if (userChoice === computerChoice){
    return 'its a tie!';
  } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
    return 'Your rock was engulfed by the paper. you lose!';
    } else { 
      return 'Your rock obliterates the scissors. You win';
  } 
  }
  
  if (userChoice === 'paper') { 
      if (computerChoice === 'scissors') {
      return 'Your paper is a shredded mess. You lose';
    } else {
      return 'Your paper swallowed the rock. You lose';
  }
  }
  
  if (userChoice === "scissors") {
      if (computerChoice === "rock") {
      return "your scissors are dusted by the rock. You lose.";
    } else { 
      return "your Scissors sliced and diced the paper. You win!";
    }
    }
    };
    
  const playGame = () => {
    const userAction = userChoice('bomb');
    const computerAction = computerChoice();
    console.log('you chose: ' + userAction);
    console.log('computer chose: ' + computerAction);
    console.log(determineWinner(userAction,computerAction));
  };
  
  playGame();
  