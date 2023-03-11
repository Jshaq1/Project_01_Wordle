const gameSpaceSection = document.getElementById('board')
let tileNum = 1
const generateRows = (guessNum) => {
    for(let i = 0; i< guessNum; i++){
        const row = document.createElement('div')
        row.setAttribute('id', 'row')
        createInputTiles(row)
        gameSpaceSection.append(row)
    }
}

const createInputTiles = (parent) => {
    for(let i = 1; i < 6; i++){
       const inputTile =  document.createElement('div')
       inputTile.setAttribute('class', 'tile')
       inputTile.innerHTML = `<div id="${tileNum}" class="character"></div>`
        parent.append(inputTile)
        tileNum++
    }
}