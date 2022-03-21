# GA.SEI.P4

## Project 4 - Flappy Bird 

## Author -
David White-Goode

## Description - 
Flappy Bird is a simple yet fun game in which the user navigates obstacles often in the form of pipes. As the pipes change their height and placement the user must also watch their jumps or falls. 

## Technologies Used:
HTML, CSS, JavaScript

## Obstacles
Learning how to handle collision was an exceedingly difficult task. 

## Sample Code 

```
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
```
