import { checkWinner } from "./checkWinner.js";
window.addEventListener("load", (e)=>{
    console.log("Window Loaded");
    let msg = document.querySelector(".msg")
    msg.textContent="1"
    let toMoveX = true; 
    let squares = []
    for(let i=0; i<9; i++){
        squares[i] = document.querySelector(`#square-${i+1}`);
        console.log(squares[i]);
    }

    

    squares.forEach((square)=>{
        square.addEventListener("click", (event)=>{
            if(square.textContent===""){
                console.log("I got clicked");
                if(toMoveX){
                    square.textContent= "X";
                    toMoveX = !toMoveX;
                    msg.textContent="2"
                    if(checkWinner(squares, "X")){
                        msg.textContent="player X won";
                        // MAke Popup
                    }

                }else{
                    square.textContent= "O";
                    toMoveX = !toMoveX;
                    msg.textContent="1"
                    if(checkWinner(squares, "O")){
                        msg.textContent="player O won";

                    }
                }
            }else{
                console.error("already has value");
            }
        })
    })


});

