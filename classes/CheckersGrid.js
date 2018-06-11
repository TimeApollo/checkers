'use strict'

import {DarkCheckerCell} from "./classes/DarkCheckerCell.js";
import {CheckerCell} from "./classes/CheckerCell.js";

//inherits from grid class.
export function CheckersGrid( init , currentGame ){
  this.currentGame = currentGame;
  Grid.call( this , init )
  console.log('Checkers Grid' , this);
}

CheckersGrid.prototype = Object.create( Grid.prototype );
CheckersGrid.prototype.constructor = CheckersGrid;

//overwrote createcell method on grid constructor.
CheckersGrid.prototype.createCell = function( rowIndex , columnIndex ){
  let cell = 0;
  if(( rowIndex % 2 === columnIndex % 2 )){
    cell = new CheckerCell( rowIndex , columnIndex );
  }else{
    cell = new DarkCheckerCell( rowIndex , columnIndex );
    if( cell.element.dataset.row <= 2 ){
      Player.prototype.addPiece( cell , 'red' , 'checker' );
    }
    if( cell.element.dataset.row >= 5 ){
      Player.prototype.addPiece( cell , 'black' , 'checker' );
    }
  }
  this.grid[rowIndex].rowElement.appendChild( cell.element );

  return cell;
}

//creates the element that contains the whole grid.
//Used to write over grid prototype that also added eventlisteners.
//moved event listeners to game constructor.
CheckersGrid.prototype.createElement = function(){
  this.grid.element = document.createElement( 'article' );
  this.grid.element.classList.add( 'container' );
}

