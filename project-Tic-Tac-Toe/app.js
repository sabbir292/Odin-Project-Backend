const GameBoard = (()=>{
    const gamebord = ["","","","","","","","","",]

    const board = document.querySelector('.board')
    console.log(board)
    const cell = gamebord.map((item,index)=>{
        return `<div class= 'cells board${index}' data-id = ${index}>${item}</div>`
    })
    const newBoard = cell.join('')
    board.innerHTML = newBoard
    const cells = document.querySelectorAll('.cells')
    return {cells,gamebord}
})();


const Player = ()=>{
    const playerX = 'x'
    const playerO = 'o'

    let activeplayer = playerX
    const switchPlayerTurn = ()=>{
        activeplayer = activeplayer === playerX? playerO : playerX
    }
    const getActivePlayer = ()=> activeplayer
    console.log(getActivePlayer())
    return {playerO,playerX,getActivePlayer,activeplayer,switchPlayerTurn}
}

const getWinner = (gamebord)=>{
    const array = [
        [gamebord[0],gamebord[1], gamebord[2]],
        [gamebord[3],gamebord[4], gamebord[5]],
        [gamebord[6],gamebord[7], gamebord[8]],

        [gamebord[0],gamebord[3], gamebord[6]],
        [gamebord[1],gamebord[4], gamebord[7]],
        [gamebord[2],gamebord[5], gamebord[8]],

        [gamebord[0],gamebord[4], gamebord[8]],
        [gamebord[2],gamebord[4], gamebord[6]],
    ]
    for (let i = 0; i<array.length; i++){
        const [a,b,c]= array[i]

        if(a && a===b && b===c){
            return `The winner is ${a}`
            // console.log(`The winner is ${a}`)
        }
    }

    if(gamebord.every(cell=> cell!=='')){
        // console.log(`It's a tie`)
        return `It's a Tie`
    }
}

const playGame =(()=>{
    const {cells,gamebord}= GameBoard
    let {playerO,playerX,getActivePlayer,activeplayer,switchPlayerTurn}= Player()
    // console.log({cells,gamebord,playerO,playerX})
   
    const messages = document.querySelector('.messages')

    const addMarker = (e)=>{
       const value = e.target.textContent
       const index = e.target.dataset.id
    //    console.log({value,index})

       if(!value && !getWinner(gamebord)){
        gamebord.splice(index,1,getActivePlayer())
        e.target.textContent = getActivePlayer()
        activeplayer = playerX
        switchPlayerTurn()
       }
       else if(!value && !getWinner(gamebord)){
        gamebord.splice(index,1,getActivePlayer())
        e.target.textContent = getActivePlayer()
        activeplayer = playerO
        switchPlayerTurn()
       }
       
    //    getWinner(gamebord)
       
       
       if(getWinner(gamebord)){
            messages.textContent = getWinner(gamebord)
       }else{
        messages.textContent = `Player ${getActivePlayer()}'s turn`
       }
    //    Player()
    }

    const resetGame = () => {
    
        GameBoard.gamebord.fill('')
        GameBoard.cells.forEach(cell => {
          cell.textContent = ''
        })
        messages.textContent = `Player ${Player().getActivePlayer()}'s turn`
      }
      
      const reset = document.querySelector('.reset')
      reset.addEventListener('click', resetGame)


    cells.forEach(cell=>{
        cell.addEventListener('click',addMarker)
    })
})();
// playGame()


