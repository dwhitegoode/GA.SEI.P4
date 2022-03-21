/*flappy bird project 4 */

const flappy = document.querySelector('.flappy')
const view = document.querySelector('.wrapper')
const floor = document.querySelector('.floor')

let fLeft = 150
let fbot = 500
let gravity = 2
let gameEnd = false


game = () => {
  if (fbot > 200) {
    fbot -= gravity
  }

  //putting flappy on the screen
  flappy.style.bottom = `${fbot}px`
  flappy.style.left = `${fLeft}px`
}

let currentGame = setInterval(game, 20)


//onkey up of arrow keys
let userCommand = e => {
  if (e.keyCode === 38) {
    flap()
  }
}

let flap = () => {
  if (fbot < 1000) {
    fbot += 50
  }
  flappy.style.bottom = `${fbot}px`
  console.log(fbot)
}

document.addEventListener('keyup', userCommand)

/*creating pipes for top and bottom obstacles */

pipeBuilder = () => {
  let pipeOrigin = 1000
  //let randomHeight = Math.random() * 100
  let pipeSeparation = Math.floor(Math.random() * (550 - 400) + 400)

  let pipeDepth = Math.random() * 150
  const botPipe = document.createElement('div')
  const topPipe = document.createElement('div')


  if (!gameEnd) {
    botPipe.classList.add('botPipe')
    topPipe.classList.add('topPipe')
    console.log(`pipe distance:${pipeSeparation}`)
  }

  view.appendChild(botPipe)
  view.appendChild(topPipe)

  /*accessing css styling thorugh js */
  botPipe.style.left = `${pipeOrigin}px`
  botPipe.style.bottom = `${pipeDepth}px`
  topPipe.style.left = `${pipeOrigin}px`
  topPipe.style.bottom = `${pipeDepth + pipeSeparation}px`

  pipeScroller = () => {
    pipeOrigin -= 2
    botPipe.style.left = `${pipeOrigin}px`
    topPipe.style.left = `${pipeOrigin}px`

    if (pipeOrigin === -60) {
      clearInterval(pipeInterval)
      view.removeChild(botPipe)
      view.removeChild(topPipe)
    }
    if (pipeOrigin > 150 && pipeOrigin) { }

  }

  /*creating pipes a constanct click */
  let pipeInterval = setInterval(pipeScroller, 20)

  if (!gameEnd) {
    setTimeout(pipeBuilder, 3000)
  }
}

pipeBuilder()