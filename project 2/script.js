let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");
const reset = document.querySelector("#reset");



const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    // rock , paper , scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame= ()=>{
    msgPara.innerText = "Game was Draw! Play again.";
    msgPara.style.backgroundColor ="#081b31";
}

const showWinner = (userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        msgPara.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor ="green";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msgPara.innerText = `You Lose! computer ${compChoice} beats Your ${userChoice}`;
        msgPara.style.backgroundColor ="red";
    }
}

const playGmae=(userChoice)=>{    
    // Generate Computer choice
    const compChoice = genComputerChoice();
    
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            // scissors , paper
            userWin =compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice ==="scissors" ? false:true;
        }else{           
            // rock , paper
            userWin = compChoice ==="rock" ? false:true;
        }
        showWinner (userWin,userChoice,compChoice);
    }

    
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGmae(userChoice);
    })
})

reset.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    msgPara.innerText = "Play your move";
    msgPara.style.backgroundColor="#081b31";
})