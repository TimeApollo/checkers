'use strict'

import {CheckerPiece} from "./CheckerPiece.js";
import {CheckersGrid} from "./CheckersGrid.js";

export function Player( gridInstance , color = 'red' , currentGame ){
  this.color = color;
  this.checkerGrid = gridInstance;
  this.currentGame = currentGame;
  this.currentMove = 'pick'
  this.clickedCell = 0;
  this.previousClickedCell = 0;
}

Player.prototype.addPiece = function( darkCheckerCell , color , type ){
  let piece = new CheckerPiece( color , type );
  darkCheckerCell.element.appendChild( piece.element );
}

Player.prototype.removePiece = function( darkCheckerCell ){
  darkCheckerCell.element.firstChild.remove();
}



Player.prototype.currentClicked = function( clickedDarkCell ){
  new CheckersGrid( )
  this.clickedCell = clickedDarkCell;
  console.log(this.clickedCell)
  if( this.color === 'red' ){
    if( this.currentMove === 'pick' && this.clickedCell.element.lastChild.classList.contains('redPiece')){
      this.clickedCell.toggleIsClicked();
      this.neighbors = this.checkerGrid.returnNeighbors(this.clickedCell);
      this.previousClickedCell = this.clickedCell;
      this.currentMove = 'place'
      console.log(this.currentMove)
    }else{
      if(this.clickedCell === this.previousClickedCell){
        this.currentMove = 'pick';
        this.clickedCell.toggleIsClicked();
        console.log(this.currentMove)
      }else{
        if( this.neighbors.includes(this.clickedCell)){
          this.addPiece( this.clickedCell , this.color , 'checker' );
          this.removePiece( this.previousClickedCell);
          this.clickedCell.toggleIsClicked();
        }
      }
    }
  }else{
    if( this.currentMove === 'pick' && this.clickedCell.element.classList.contains('black')){
      this.clickedCell.toggleIsClicked();
      this.previousClickedCell = this.clickedCell;
      this.currentMove = 'place'
      console.log(this.currentMove)
    }else{
      if(this.clickedCell === this.previousClickedCell){
        this.currentMove = 'pick';
        this.clickedCell.toggleIsClicked();
        console.log(this.currentMove)
      }
    }
  }
  
  // if( this.color === 'red'){

  //   console.log('red');
  //   this.currentGame.currentPlayer = this.currentGame.blackPlayer;
  // }else{
  //   console.log('black');
  //   this.currentGame.currentPlayer = this.currentGame.redPlayer;
  // }
  // this.clickedDarkCell = clickedDarkCell;
  // console.log(this.clickedDarkCell);
}