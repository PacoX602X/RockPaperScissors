var choices = ["Rock", "Paper", "Scissors"]
let compSelection = ''
let playerSelection = ''

function playerChoice(){
    select = prompt('Rock, Paper, or Scissors?')
    if (choices.includes(select)){
        return playerSelection = select
    }
    else {
        playerChoice()
    }
}
function computerPlay(){
    let random = choices[Math.floor(Math.random() * 3)];
    return compSelection = random;
}

function play(playerSelection, compSelection){
    if (playerSelection == "Rock"){
        if (compSelection == "Scissors") return "You win"
        if (compSelection == "Rock") return "It's a draw!"
        return "You loose!"        
        }
    if (playerSelection == "Paper"){
        if (compSelection == "Scissors") return "You loose!"
        if (compSelection == "Rock") return "You win!"
        return "It's a draw!"
       }
<<<<<<< HEAD
    if (playerSelection == 'Scissors'){
        if (compSelection == "Scissors") return "It's a draw!"
        if (compSelection == "Rock") return "You loose!"
        return "You win!"
       }
}    
=======
       else if (compSelection == "Rock"){
           return "It's a draw!"
           
       }
       else {
           return "You loose!"
       }
        console.log('rock')
    }
    else if (playerSelection == "Paper"){
        if (compSelection == "Scissors"){
            return "You loose!"
       }
       else if (compSelection == "Rock"){
           return "You win!"
       }
       else {
           return "It's a draw!"
       }
        console.log('paper')
    }
    else {
        if (compSelection == "Scissors"){
            return "It's a draw!"
            
       }
       else if (compSelection == "Rock"){
           return "You win!"
       }
       else {
           return "It's a draw!"
       }
        console.log('scissors')
    }
}    
function round(){
    console.log('1')
    playerSelection = playerChoice()
    console.log(playerSelection)
    compSelection = computerPlay()
    console.log(compSelection)
    let win = play(playerSelection, compSelection)
    window.alert(win)
    console.log('4')
}


>>>>>>> 2149fd575473fefd1df3d02bb62fbca299534a03
