// generation of random value

// count of attempts
// until hit
  
// function for the number sent by the user
function submit(){
    real_answer=Math.floor(Math.random() * 10 + 1);
    answer=document.getElementById("guessField").value;
    playername=localStorage.getItem("player_name");
    console.log(real_answer);

    if (real_answer==answer){
        alert("CONGRATULATIONS!!!  "+playername+"  YOU GUESSED IT RIGHT");
    }
    else if(answer>real_answer){
        
        alert("OPPS SORRY, TRY A SMALLER NUMBER");
    }
    else{
        
        alert("OPPS SORRY TRY A GREATER NUMBER");
    }
}

function playAgain(){
   real_answer=Math.floor(Math.random() * 10 + 1);
   console.log(real_answer)
}