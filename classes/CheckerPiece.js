'use strict'

function CheckerPiece( color , type ){
  this.type = type;
  this.color = color;
  this.element = document.createElement('div');
  this.element.classList.add( this.color + 'Piece' );
  this.element.classList.add( type );
}