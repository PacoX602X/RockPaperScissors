var choices = ["Rock", "Paper", "Scissors"]
let compSelection = ''
let playerSelection = ''
let winner = ''


function playerChoice(){
    select = prompt('Rock, Paper, or Scissors?')
    select = select[0].toUpperCase() + select.slice(1).toLowerCase()
    if (choices.includes(select)) return playerSelection = select
    playerChoice()
    
}
function computerPlay(){
    let random = choices[Math.floor(Math.random() * 3)];
    return compSelection = random;
}

function play(playerSelection, compSelection){
    if (playerSelection == "Rock"){
        if (compSelection == "Scissors") return "You win!"
        if (compSelection == "Rock") return "It's a draw!"
        return "You loose!"        
        }
    if (playerSelection == "Paper"){
        if (compSelection == "Scissors") return "You loose!"
        if (compSelection == "Rock") return "You win!"
        return "It's a draw!"
       }
    if (playerSelection == 'Scissors'){
        if (compSelection == "Scissors") return "It's a draw!"
        if (compSelection == "Rock") return "You loose!"
        return "You win!"
       }
}    
         
function round(){
    playerSelection = playerChoice()
    compSelection = computerPlay()
    let win = play(playerSelection, compSelection)
    window.alert(win)
    return winner = win
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
    round()
    if (winner == 'You win!') playerScore++ 
    if (winner == 'You loose!') computerScore++
    }
    if (playerScore > computerScore) return 'You won the match!'
    if (playerScore == computerScore) return 'Its a tie!'
    if (playerScore < computerScore) return 'You lost the match'
    
}

