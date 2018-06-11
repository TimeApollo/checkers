'use strict'

function CheckerCell( rowIndex , columnIndex ){
  Cell.call( this , rowIndex , columnIndex );
}

CheckerCell.prototype = Object.create( Cell.prototype );
CheckerCell.prototype.constructor = CheckerCell;
