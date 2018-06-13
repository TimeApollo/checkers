'use strict'

function Game( init ){
  this.board = new CheckersGrid( init , this );
  this.board.grid.element.addEventListener( 'click' , this );
  this.board.grid.element.addEventListener( 'contextmenu' , this );
  this.grid = this.board.grid;
  this.redPlayer = new Player( this.board , 'red' , this );
  this.blackPlayer = new Player( this.board , 'black' , this );
  console.log('this is board' , this.board);
  this.currentPlayer = this.redPlayer;
}

Game.prototype.toggleTurn = function(){
  this.currentPlayer = (this.currentPlayer === this.redPlayer) ? this.blackPlayer : this.redPlayer;

  return this.currentPlayer;
}

Game.prototype.handleEvent = function( event ){
  console.log(event.target)
  if ( !event.target.classList.contains( "black" ) ) return false;
  //this.currentPlayer = this.currentGame.currentPlayer;
  console.log( this.currentPlayer )

  let clickedCell = this.grid.findCell( Number( event.target.dataset.row) , Number(event.target.dataset.column ));
  


  const clickTypes = {
    click: () => {
      this.currentPlayer.currentClicked( clickedCell )
      //currentPlayer.currentClicked.call( this , clickedCell )
      // clickedCell.toggleIsClicked();
      // this.returnNeighbors( clickedCell ).forEach( cell => cell.setAsClicked());
    },

    contextmenu: () => {
      event.preventDefault();
    }
  }
  clickTypes[event.type]()
}

