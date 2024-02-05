function chessBoard(rows, columns) {
    let str = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if ((i + j) % 2 === 0) {
                str +='O';
            } else {
                str += 'X';
            }
        }
        str += '\n';
    }
    return str
    }


console.log(chessBoard(10, 15))