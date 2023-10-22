export const checkWinner = (board, player)=>{
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