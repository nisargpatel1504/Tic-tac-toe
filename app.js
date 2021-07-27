const boxes = Array.from (document.getElementsByClassName('cell'));
const playText = document.getElementById('playText');
const spaces = [];
const O_text = "O";
const X_text = "X";
let currentPlayer;
const btnRestart = document.getElementById('restartButton');
const drawBoard = () =>{
    boxes.forEach(( cell , index ) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
          }
          if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
          }
          if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
          }
          if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
          }
          cell.style = styleString;
          cell.addEventListener('click',boxClicked)
    });
};
const boxClicked = (e) =>{
    const id = e.target.id;
    console.log(id);
    if(!spaces[id])
    {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(playerHasWon(currentPlayer)){
            playText.innerText = `${currentPlayer} has won!!`;
            return;
        }
        currentPlayer = currentPlayer === O_text ? X_text : O_text;
    }
} 
const playerHasWon = (currentPlayer) => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        
    }
    else if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[0] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
    }
    else if(spaces[4] === currentPlayer){
        if(spaces[0] === currentPlayer && spaces[8] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
    }
    else if(spaces[3] === currentPlayer){
        if(spaces[4] === currentPlayer && spaces[5] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[0] === currentPlayer && spaces[6] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
    
    }
    else if(spaces[5] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[8] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[4] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
    
    }
    else if(spaces[6] === currentPlayer){
        if(spaces[7] === currentPlayer && spaces[8] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[0] === currentPlayer)
        {
            console.log(`${currentPlayer} won`);
            return true;
        }
    
    }


    
}


const restart = () =>{
    spaces.forEach((space,index) =>{
        spaces[index] = null;
       }) 
       boxes.forEach(cell =>{
           cell.innerText ="";
       })
       playText.innerText ="Let's Play again";  
       currentPlayer= O_text;
}

btnRestart.addEventListener ('click',restart);
restart();
drawBoard();