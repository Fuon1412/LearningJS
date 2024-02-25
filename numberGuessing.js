//Number guessing game

const min =1;
const max = 10;

let winningNum = Math.floor(Math.random() * (max - min + 1));
console.log(winningNum);

let guessAttempts = 10;

while(guessAttempts > 0){
    let guess = parseInt(prompt(`Enter a number between ${min} and ${max}`));
    if(isNaN(guess)){
        alert('Please enter a valid number');
        continue;
    }
    if(guess < min || guess > max){
        alert(`Please enter a number between ${min} and ${max}`);
        continue;
    }
    if(guess === winningNum){
        alert('You won');
        break;
    }else{
        guessAttempts--;
        if(guessAttempts === 0){
            alert(`You lost. The correct number was ${winningNum}`);
        }else{
            if(guess > winningNum){
                alert('Lower');
            }
            else alert('Higher');
            alert(`You have ${guessAttempts} attempts left`);
        }
    }
}