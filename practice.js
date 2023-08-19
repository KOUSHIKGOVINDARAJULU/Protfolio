const enter = () =>{
    const Game = confirm("shell we play a stone papper sizzer".toUpperCase());
    (Game)?gameStart():alert("ok , Thank you for the Time".toUpperCase());
}
 const gameStart = () =>{
    while(true)
    {
        let userInput = fetchUserChoice();
        userInput = compareGivenInput(userInput);
        if(userInput===""){
            alert("Given Input is Invalid".toUpperCase())
        }
        
        let personChoice = correctWord(userInput);
        
        if(!personChoice){
            return invalidAlert();
        }
        computerInput = arrayComputer();
        
        let result = startgame(personChoice,computerInput)
        displayResult(result);
        let replayGame = replayAgain()
        if(replayGame){
            gameStart()
            continue;
        }
        else{
            thanksMsg();
            break;
        }


    }
}
const fetchUserChoice = () =>{
    let Choice = prompt("Enter the input To Play A Game".toUpperCase());
    return Choice;
}
 const compareGivenInput = (userInput) =>{
     if(userInput || userInput===""){
        return userInput.trim().toLowerCase()
        
     }
     else{
        alert("check your input is in lowercase".toUpperCase())
     }
 }
const arrayComputer = () =>{
    let ComputerChoice = ["stone","papper","sisser"];
    let randomChoice = Math.floor(Math.random()*3);
    return(ComputerChoice[randomChoice]);
}
const correctWord = (userInput) =>{
    if(userInput === "stone"||userInput ==="papper"||userInput ==="sisser"){
        return userInput;
    }
    else{
        
        return false;
    }
   
    
}
const invalidAlert = () =>{
        alert("please Enter correct word like stone , papper, sisser".toUpperCase())
        return gameStart();
}
// const Alert = () =>{
//     alert("please stone , papper, sisser".toUpperCase())
//     return gameStart();
// }
const startgame = (userInput,computerInput) => {
    let compareInput = userInput===computerInput ? 
    `TIE \nuser: ${userInput} \ncomputer: ${computerInput}` :
    userInput === "stone" && computerInput === "papper" ?
    ` Computer Wins \nuser: ${userInput} \ncomputer: ${computerInput}`:
    userInput === "papper" && computerInput === "sisser" ? 
    ` Computer Wins \nuser: ${userInput} \ncomputer: ${computerInput}`:
    userInput === "sisser" && computerInput === "stone" ?
    ` Computer Wins \nuser: ${userInput} \ncomputer: ${computerInput}`:
    `You Win the Match \nuser: ${userInput}  \ncomputer: ${computerInput}`
    return compareInput.toUpperCase();

}
const displayResult = (result) =>{
    alert(result)
}
const replayAgain = () =>{
    let rePlay = confirm("do yo want to play again".toUpperCase())
    return rePlay;
}
const thanksMsg = () => {
    return alert("thank you for your time".toUpperCase())
}
enter();