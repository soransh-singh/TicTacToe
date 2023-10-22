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

    const checkWinner = (board, player)=>{
        console.log("check Winner called "+player);
        for(let i=0; i<3; i++){
            let won = true;
            for(let j=0; j<3; j++){
                if(board[i*3+j].textContent!==player){
                    won=false;
                }
            }
            if(won){
                return true;
            }
        }

        for(let j=0; j<3; j++){
            let won = true;
            for(let i=0; i<3; i++){
                if(board[i*3+j].textContent!==player){
                    won=false;
                }
            }
            if(won){
                return true;
            }
        }

        if(board[0].textContent===player && board[4].textContent===player && board[8].textContent===player){
            return true;
        }

        if(board[2].textContent===player && board[4].textContent===player && board[6].textContent===player){
            return true;
        }

        return false;
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

