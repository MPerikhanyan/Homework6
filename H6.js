//N1
 
     const canvas = document.getElementById('canvas');
  const context = canvas.getContext("2d");
  

const backgroundimg = new Image();
backgroundimg.src = "https://www.mafiascum.net/images/img-tags/pKbCWKXkl2jBUxrjUFxH.png";
const lines = new Image();
lines.src = "http://forums.nrvnqsr.com/attachment.php?attachmentid=12144&d=1446157834";
const pl = new Image();
pl.src =" https://vignette.wikia.nocookie.net/mms/images/f/fa/Im_orange.png/revision/latest?cb=20131103021928"

let isHuman = true;

 const board = [
    [' ', ' ', ' '], 
    [' ', ' ', ' '], 
    [' ', ' ', ' ']
];


const nextMove = function(x){
    for (let i=0;i<x.length;i++){
      for (let j=0;j<x.length;j++){
        if(x[i][j]===" "){
          return [i,j];				
        }
      }
      
    }
  };
const makeMove = function(board, location, isX){
  if( location[0] < 0 || location[0] > 2 || location[1] < 0 || location[1] > 2 || board[location[0]][location[1]] !== " "){
    return -1;
  }
  else {
    if(isX) {
      board[location[0]][location[1]] = "x";
    } else {
      board[location[0]][location[1]] = "o";
    }
    return 0;
  }
};





const findWinner = function (board){
  for( let i = 0; i <= 2; i++ ){
    if(board[0][i] !== " " && board[0][i] + board[1][i] + board[2][i] === board[0][i] + board[0][i] + board[0][i]){  
      return {
        winner: board[0][i],
        winningLocation: [[0, i], [1, i], [2, i]]
      };
    };  
    if(board[i][0] !== " " && board[i][0] + board[i][1] + board[i][2] === board[i][0] + board[i][0] + board[i][0]){ 
      return {
        winner: board[0][i],
        winningLocation: [[i, 0], [i, 1], [i, 2]]
      };
  
     }; 
  };
    if(board[0][0] !== " " && board[0][0] + board[1][1] + board[2][2] === board[0][0] + board[0][0] + board[0][0]){ 
      return {
        winner: board[0][0],
        winningLocation: [[0, 0], [1, 1], [2, 2]]
      };
    };

    if(board[0][2] !== " " && board[0][2] + board[1][1] + board[2][0] === board[1][1] + board[1][1] + board[1][1]){ 
      return {
        winner: board[1][1],
        winningLocation: [[0, 2], [1, 1], [2, 0]]
      };
    };
    if(!board.toString().includes(" ")) {
      return {
        winner: "no winner"
      }
    }
};



context.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", function(e) {

  e.offsetY
  e.offsetX
});

canvas.addEventListener("mouseup", function(e) {
  
});

let isWin = false;
    let isFirst = false;
    canvas.addEventListener('mousedown', function(e) {
      if(board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] === ' ') {
        board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] = 'x';

        context.drawImage(lines, Math.floor(e.offsetX/(canvas.width / 3)) * (canvas.width / 3) + 20, 
          Math.floor(e.offsetY/(canvas.height / 3)) * (canvas.height / 3) + 20, 200, 200 )
        

        isFirst = false;
        isHuman = false;
      }
      if(isWin) {
        for(let i = 0; i < board.length; i++) {
          for(let j = 0; j < board.length; j++) {
            board[i][j] = '';
          }
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
        isWin = false;
        first();
        isFirst = true;
      }
      if(findWinner(board)) {
        isWin = true;
      }
    });
    canvas.addEventListener('mouseup', function(e) {
      if(!isFirst && !isWin && !isHuman) {
        isHuman = true;
        const next = nextMove(board);
        console.log(next)
        console.log(makeMove(board, next));
        context.drawImage(pl, Math.floor(next[1] * (canvas.width / 3)), 
          Math.floor(next[0] * (canvas.width / 3) ));
        if(findWinner(board)) {
          isWin = true;
        }
      }
    });