class Board {
    constructor() {
        this.gameTable = document.getElementById('game');
        this.gameMap = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
        ];
    }

    generateMap() {
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr');
            this.gameTable.appendChild(tr);
            for (let j = 0; j < 3; j++) {
                let td = document.createElement('td');
                td.dataset.row = i.toString();
                td.dataset.col = j.toString();
                tr.appendChild(td);
            }
        }
    }
}
