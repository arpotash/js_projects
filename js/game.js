class Game {

    init(board, player, phase) {
        this.board = board;
        this.player = player;
        this.phase = phase;
    }
    
    clickHandle() {
        this.board.gameTable.addEventListener('click', event => this.cellClickHandler(event));
    }

    cellClickHandler(event) {
        if (!this.isRightClick(event)) {
            return;
        }
        this.gameMove(event);

        if (this.checkPossibleWon(event)) {
            this.phase.gamePause();
            this.sayCongratulations();
            this.repeatGame();
        }
        this.player.changePlayer();
    }

    isRightClick(event) {
        return this.cellEmpty(event) && this.phase.gamePlay && this.clickByCell(event);
    }

    cellEmpty(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        return this.board.gameMap[row][col] === '';
    }

    clickByCell(event) {
        return event.target.tagName === 'TD';
    }

    gameMove(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        this.board.gameMap[row][col] = this.player.gamePlayer;
        event.target.textContent = this.player.gamePlayer;
    }

    checkPossibleWon() {
        return this.isThereWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2,y: 0}) ||
        this.isThereWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2,y: 1}) ||
        this.isThereWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2,y: 2}) ||
        this.isThereWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
        this.isThereWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
        this.isThereWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||
        this.isThereWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
        this.isThereWon({x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2})
    }

    isThereWon(a, b, c) {
        let wonCombination = this.board.gameMap[a.x][a.y] + this.board.gameMap[b.x][b.y] + this.board.gameMap[c.x][c.y];
        return wonCombination === 'XXX' || wonCombination === 'OOO';
    }

    sayCongratulations() {
        let winner = this.player.gamePlayer === 'X' ? 'Крестики' : 'Нолики';
        alert(`${winner} выиграли`);
    }

    repeatGame() {
        if (confirm('Хотите сыграть еще раз?')) {
            let tds = document.querySelectorAll('td');
                tds.forEach(function (td) {
                    td.textContent = '';
                });
                this.clickHandle();
            } else {
                this.board.gameTable.remove();
            }
        }
}
