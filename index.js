const choices = ["scissors","paper","rock"]
function getComputerChoice(){   
    const computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice
    }
function playRound(playerSelection,computerSelection) {
    if( playerSelection == computerSelection) {
        {
            console.log(`draw both of you choice was ${computerSelection}`)
            return 2 
        }
    }
    else {
        for(let i = 0; i<choices.length;i++){
            if(playerSelection == choices[i]&& computerSelection == choices[i - 1]) {
                console.log(`you lose! ${computerSelection} beats ${playerSelection}`)
                return 1
            }
            else if(playerSelection == choices[i]&& computerSelection == choices[2]) {
                console.log(`you lose! ${computerSelection} beats ${playerSelection}`)
                return 1
            }
        }
        console.log(`you won! ${playerSelection} beats ${computerSelection}`) 
        return 0
    }
}
function game() {
 let user_wins = 0
 let computer_wins = 0
 for(let i = 0; i<5;i++){
    const result = playRound(prompt("enter between rock, paper and scissors"),getComputerChoice())
    if(result == 0) user_wins++
    else if(result == 1 )computer_wins++
 }
 if(user_wins > computer_wins) console.log("you won the game")
 else if (user_wins == computer_wins) console.log("the game ended on a draw")
 else console.log("you lost the game")
}
