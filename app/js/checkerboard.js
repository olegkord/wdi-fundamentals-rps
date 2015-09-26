var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

//Set up global variable: associative array of pieces;

var pieces = {
    'red'  : [],
    'black': [],
    };

function setSquare(player, row, col) {
    checkerboard[row-1][col-1] = player;
}

function getPieceAt(row, col) {
    return checkerboard[row-1][col-1];
}
function clearBoard()
{
    var numrows = 8;
    var numcols = 8;
    
    for (var ROW = 0; ROW < numrows; ROW += 1)
    {
        for (var COL = 0; COL < numcols; COL += 1)
        {
            checkerboard[ROW][COL] = null;
        }
    }
}
function setUpRed()
{
    var numrows = 3;
    var numcols = 8;
    
    for (var ROW = 0; ROW < numrows; ROW +=1)
    {
        for (var COL = 0; COL < numcols; COL += 1)
        {
            if (((ROW % 2 === 1)&&(COL % 2 == 1))||((ROW % 2===0)&&(COL % 2 === 0)))
            {
                checkerboard[ROW][COL] = 'R';
            }

        }
    }
}
function setUpBlack()
{
    var numrows = 8;
    var numcols = 8;
    
    for (var ROW = 5; ROW < numrows; ROW +=1 )
    {
        for (var COL = 0; COL < numcols; COL += 1)
        {
            if (((ROW % 2 === 1)&&(COL % 2 == 1))||((ROW % 2===0)&&(COL % 2 === 0)))
            {
                checkerboard[ROW][COL] = 'B';
            }
        }
    }
}
function setUpBoard()
{
    setUpRed();
    setUpBlack();
}
function findPieces()
{
 
    var numrows = 8;
    var numcols = 8;
    
    for (var ROW = 0; ROW < numrows; ROW += 1)
    {
        
        for (var COL = 0; COL < numcols; COL += 1)
        {
            if (checkerboard[ROW][COL]==='R')
            {

                pieces.red.push([ROW,COL]);
            }
            else if (checkerboard[ROW][COL]==='B')
            {
                pieces.black.push([ROW,COL]);
            }
        }
    }
}
setUpBoard();
console.log(checkerboard);

findPieces();

console.log(pieces);

  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });