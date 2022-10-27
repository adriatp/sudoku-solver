SIZE = 9

var [r, c] = [SIZE, SIZE]; 
var sudoku = Array(r).fill().map(()=>Array(c).fill(0));

function valid_row(i) {
  for (var j=0; j<SIZE; j++) {
    
  }
}

function valid_column(j) {
  gotten = []
  for (var i=1; i<SIZE; i++) {
    for (var aux=0; aux<i; aux++) {
      if (sudoku[i][j] != 0 && sudoku[i][j] == sudoku[aux][j]) {
        return false;
      }
    }
  }
  return true;
}

function valid_square(i,j) {

}