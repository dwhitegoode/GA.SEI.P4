/*flappy bird project 4 */
let backgroundDiv = document.createElement('div')
let helperNode = document.querySelector('.sky')
let parent = helperNode.parentNode
let wrap = document.parentElement
let flappin = document.createElement('div')
flappin.classList.add('flappy')
flappin.classList.add('active')
helperNode.appendChild(flappin)
backgroundDiv.classList.add('background')
backgroundDiv.classList.add('unpaused')
parent.appendChild(backgroundDiv)
const flappy = document.querySelector('.flappy')
const view = document.querySelector('.wrapper')
const floor = document.querySelector('.floor')
/*
 let createdDiv = document.createElement('div')
    let newClass = createdDiv.classList.add('duck')
    document.body.appendChild(createdDiv)

    let flapToggle = () => {
      createdDiv.classList.toggle('flap')
    }


*/
let redoButton = document.querySelector('.restart')
redoButton.addEventListener('click', e => {
  console.log("i'm clicked!")
  window.open('homepage.html', '_self')
})

let fLeft = 150
let fbot = 500
let gravity = 2
let gameEnd = false
let currentScore = 0;
let count = 0;


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
    if (count > 9) {
      flappin.classList.remove('active')
      flappin.classList.add('activeX')
    }
    if (count > 19) {
      flappin.classList.remove('activeX')
      flappin.classList.add('activeY')
    }

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
    count++
    document.querySelector('.count').innerHTML = `SCORE: ${count}`
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

    let birdy = document.querySelector('.flappy')
    let pipe = document.querySelector('.botPipe')
    let tpipe = document.querySelector('.topPipe')

    let toggle = () => {
      backgroundDiv.classList.remove('unpaused')

    }
    birdDown = (bird, bottomPipe) => {
      let birdObj = bird.getBoundingClientRect()
      let botPipeObj = bottomPipe.getBoundingClientRect()
      let topPipeObj = topPipe.getBoundingClientRect()

      if ((birdObj.left < botPipeObj.left + botPipeObj.width && birdObj.left + birdObj.width > botPipeObj.left &&
        birdObj.top < botPipeObj.top + botPipeObj.height && birdObj.top + birdObj.height > botPipeObj.top) || fbot === 200) {
        theEnd()
        clearInterval(pipeInterval)
        toggle()

      }
      else {
      }
    }
    birdDown(birdy, pipe)

    birdDown2 = (bird, topPipe) => {
      let birdObj = bird.getBoundingClientRect()
      //let botPipeObj = bottomPipe.getBoundingClientRect()
      let topPipeObj = topPipe.getBoundingClientRect()

      if ((birdObj.left < topPipeObj.left + topPipeObj.width && birdObj.left + birdObj.width > topPipeObj.left &&
        birdObj.top < topPipeObj.top + topPipeObj.height && birdObj.top + birdObj.height > topPipeObj.top) || fbot === 200) {
        theEnd()
        clearInterval(pipeInterval)
        toggle()
        //flap.classList.add('exlposion')
      }
      else {
      }
    }
    birdDown2(birdy, tpipe)
  }

  // if (pipeOrigin > 130 && pipeOrigin < 210 && fLeft === 150 || fbot === 200 &&
  //   fbot < pipeOrigin) {
  //   theEnd()
  //   clearInterval(pipeInterval)
  // }



  /*moving pipes at a constanct click */
  let pipeInterval = setInterval(pipeScroller, 20)

  if (!gameEnd) {
    setTimeout(pipeBuilder, 3000)
    count++

    // document.querySelector('#score').innerHTML = count
  }
}


pipeBuilder()

theEnd = () => {
  clearInterval(currentGame)
  console.log('the end')
  gameEnd = true
  /* no more use for event listener */
  document.removeEventListener('keyup', userCommand)
}