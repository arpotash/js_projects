"use strict";

window.addEventListener('load', function(){
    let board = new Board();
    let phase = new Phase();
    let player = new Player();
    let game = new Game();
    game.init(board, player, phase);
    
    board.generateMap();
    game.clickHandle();
});