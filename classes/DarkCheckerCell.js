'use strict'

export function DarkCheckerCell( rowIndex , columnIndex ){
  CheckerCell.call( this , rowIndex , columnIndex )
  this.addClassList();
}

DarkCheckerCell.prototype = Object.create( CheckerCell.prototype );
DarkCheckerCell.prototype.constructor = DarkCheckerCell;

DarkCheckerCell.prototype.addClassList = function(){
  this.element.classList.add( 'black' )
}

DarkCheckerCell.prototype.toggleIsClicked = function(){
  this.isClicked = !this.isClicked;
  this.element.classList.toggle("clicked");
}