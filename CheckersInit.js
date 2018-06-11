'use strict'

import {Game} from "./classes/Game.js";

const init = {
  rowLength: 8,
  columnLength: 8,
  directions: {
    upLeft: [ -1 , -1 ],
    upRight: [ -1 , 1 ],
    downLeft: [ 1 , -1 ],
    downRight: [ 1 , 1 ],
  },
}

let game = new Game( init );
