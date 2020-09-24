class Player {
    constructor() {
        this.gamePlayer = 'X'
    }
    
    
    
    changePlayer() {
        this.gamePlayer = this.gamePlayer === 'X' ? 'O' : 'X';
    }
}
