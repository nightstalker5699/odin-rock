const choices = ["scissors","paper","rock"]
let userWins = 0 
let botWins = 0
const h1 = document.querySelector("h1")
const div = document.querySelector("div")
function getComputerChoice(){   
    const computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice
    }
function playRound(playerSelection,computerSelection) {
    h1.textContent = `user wins:${userWins}   bot wins:${botWins}`
    if( playerSelection == computerSelection) {
        {
            div.innerHTML+= `<br> draw both of you choice was ${computerSelection}`
             
        }
    }
    else {
        let count = 0
        for(let i = 0; i<choices.length;i++){
            if(i == 0) {
                if(playerSelection == choices[i]&& computerSelection == choices[2]) {
                    div.innerHTML+= `<br> you lose! ${computerSelection} beats ${playerSelection}`
                    botWins++
                    count++
                    break;
            }}
            if(playerSelection == choices[i]&& computerSelection == choices[i - 1]) {
                botWins++
               div.innerHTML +=`<br> you lose! ${computerSelection} beats ${playerSelection}`
               count++
            
            }

        }
        if(count==0){
        div.innerHTML+= `<br> you won! ${playerSelection} beats ${computerSelection}`
        userWins++}

        h1.textContent = `user wins:${userWins}   bot wins:${botWins}`
    }
    if (userWins == 5 )
    {
        const h1 = document.createElement("h1")
        h1.textContent= `the user have won`
        div.appendChild(h1)
    }
    else if (botWins == 5 )
    {
        const h1 = document.createElement("h1")
        h1.textContent= `the bot have won`
        div.appendChild(h1)
    }
}

document.querySelectorAll("button").forEach((btn)=>{
btn.addEventListener("click",(event)=>{
    playRound(btn.value,getComputerChoice())
})
})
document.querySelector("input").addEventListener("click",(event)=>{
    userWins = 0;
    botWins = 0;
    div.textContent = "";
    h1.textContent = "user wins:0   bot wins:0 "

})
