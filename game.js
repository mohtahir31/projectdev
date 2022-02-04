const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You are in a forest and you are trying to figure out how to get out of the forest. 4 directions are in front of you which one will you choose?',
    options: [
      {
        text: 'Go Straight',
        
        nextText: 2
      },
      {
        text: 'Go Left',
        nextText: 9
      },

      {
        text: "Go Back",
        nextText: 4
      },

      {
        text: "Go Right",
        nextText: 6
      }
    ]
  },
  {
    id: 2,
    text: 'You venture and come across a lion, do you attack or run?',
    options: [
      {
        text: 'Attack the lion',
        
        nextText: 3
      },
      {
        text: 'Run away',

        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'You find a spare spear on the floor and attack the lion with it. You kill the lion and escape the forest with a town revealing after the exit',
    options: [
      {
        text: 'Congratulations, play again!',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    text: 'You come in front of a cobra snake which stings you and you die! Game Over.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Your running was a waste as the lion easily catches up and eats you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Upon turning right, you encounter quicksand and start sinking, what do you do?',
    options: [
      {
        text: 'Grab a branch',
        nextText: 7
      },
      {
          text: 'Try to move',
          nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'You escape the quicksand but are eaten by a tiger that pops out of nowhere.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to move are useless as you are sinking too fast',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You start to feel tired and see a shelter coming up ahead, what do you do?',
    options: [
      {
        text: 'Go in it',
        nextText: 10
      },
      {
          text: 'Skip it',
          nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'The Shelter is full of dynamite and it explodes on you, thus killing you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You enter a cave with a hungry bear and are eaten!',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  }
]

startGame()