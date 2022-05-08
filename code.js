let compSelection = ''
let playerSelection = ''

function computerPlay(){
    choices = ["Rock", "Paper", "Scissors"]
    let random = choices[Math.floor(Math.random() * 3)];
    return compSelection = random;
}

function play(playerSelection, compSelection){
    if (playerSelection == "Rock"){
        if (compSelection == "Scissors"){
            return "You win!"
       }
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