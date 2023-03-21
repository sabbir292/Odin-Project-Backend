const GameBoard = (()=>{
    const gameboard = ['','','','','','','','','']
    // console.log(document)
    const board = document.querySelector('.board')
    const reset = document.querySelector('.reset')

        const boards = gameboard.map((item,index)=>{
            return `<div class='cells board${index}' data-id='${index}'>${item}</div>`
        })
        const newBoards = boards.join('')
        board.innerHTML = newBoards
    
    const cells = document.querySelectorAll('.cells')
    reset.addEventListener('click',()=>{
        console.log('playing')
    })
    return {cells,gameboard,}
   
})();


const Players = ()=>{
   const playerX = 'x' 
   const playerO = 'o'  
   return {playerO,playerX}
}
Players()


const getWinner =(gameboard)=>{
    const winingFormula = [
        [gameboard[0],gameboard[1],gameboard[2]],
        [gameboard[3],gameboard[4],gameboard[5]],
        [gameboard[6],gameboard[7],gameboard[8]],

        [gameboard[0],gameboard[3],gameboard[6]],
        [gameboard[1],gameboard[4],gameboard[7]],
        [gameboard[2],gameboard[5],gameboard[8]],

        [gameboard[0],gameboard[4],gameboard[8]],
        [gameboard[2],gameboard[4],gameboard[6]],
    ]

    for (i=0; i<winingFormula.length; i++){
        const [a,b,c]= winingFormula[i]
        if( a && a === b && b === c){
            return `the winner is ${a}`
        }else if(gameboard.every(cell=> cell!=="") && a!==b && b!==c){
            return `It's a Tie`
        }
    }

}

const setActivePlayer = (currentPlayer) => {
    const { playerO, playerX } = Players();
    let activePlayer = currentPlayer;

    if (activePlayer === playerX) {
        activePlayer = playerO;
    } else if (activePlayer === playerO) {
        activePlayer = playerX;
    }
    // console.log(activePlayer)
    return { activePlayer };

};

// const setActivePlayer = ()=>{
//     const {playerO,playerX}= Players()
//     let activePlayer = playerX
//         if(activePlayer === playerX) activePlayer = playerX
//         else if(activePlayer === playerO) activePlayer = playerO
//     return {activePlayer}
// }



const PlayGame = ()=>{
    const {playerO,playerX}= Players()
    const {cells,gameboard} = GameBoard
    let {activePlayer}= setActivePlayer(playerX)


    const addMarker = (e) => {
    const index = e.target.dataset.id;
    const value = e.target.textContent;
     const messages = document.querySelector('.messages')

    if (activePlayer === playerX && !value && !getWinner(gameboard)) {
        gameboard.splice(index, 1, activePlayer);
        e.target.innerText = activePlayer;
        ({ activePlayer } = setActivePlayer(playerX));
        // messages.textContent = `Player ${activePlayer}'s turn`
    } else if (activePlayer === playerO && !value && !getWinner(gameboard)) {
        gameboard.splice(index, 1, activePlayer);
        e.target.innerText = activePlayer;
        ({ activePlayer } = setActivePlayer(playerO));
        // messages.textContent = `Player ${activePlayer}'s turn`
        console.log(activePlayer)
    }

    getWinner(gameboard);

    if(getWinner(gameboard)){
        messages.textContent = getWinner(gameboard)
    }else if(activePlayer){
        messages.textContent = `Player ${activePlayer}'s Turn`
    }
    // showMessage();
};
//         const addMarker=(e)=>{
//             const index = e.target.dataset.id
//             const value = e.target.textContent

//             if(activePlayer === playerX && !value && !getWinner(gameboard)){
//                 gameboard.splice(index,1,activePlayer)
//                 // console.log(playerX,gameboard)
//                 e.target.innerText = activePlayer
//                 activePlayer = playerO
//                 setActivePlayer()
//                 console.log(getWinner)
//             }else if(activePlayer === playerO && !value && !getWinner(gameboard)){
//                 gameboard.splice(index,1,activePlayer)
//                 e.target.innerText = activePlayer
//                 // console.log(playerO,gameboard)
//                 activePlayer = playerX
//                 setActivePlayer()
//                 console.log(getWinner)
//             }
// getWinner(gameboard)
// showMessage()
//         }
        cells.forEach(item=>{
        item.addEventListener('click',addMarker)
    })
}

PlayGame()



