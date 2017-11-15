const printDiamond = function(height, char){
    if (height%2===0) {
      height=height+1;
     }
 const printline=function(n, charline){
  if(n<=0){
    return"";
  } 
  return  charline + printline(n-1,charline);
   };
   const helper=function(space,lineN,line){
    if(line>height){
      return'';
    }
    console.log(printline(space," ") + printline(lineN,char));
    if (line<=(height-1)/2){
    helper(space-1,lineN+2,line+1);
   }
   else{
    helper(space+1,lineN-2,line+1);
   }
   }
   helper((height-1)/2,1,1);
 };  
 printDiamond(5,'*');
 
const printDiamond = function(height, char) {
  if(height % 2 === 0) {
    height = height - 1;
  }
  const printLine = function(n, charline) {
    let m = '';
    for(let i = 0; i < n; i++) {
      m = m + charline;
    }
    return m;
  };
  let space = (height-1)/2;
  let line = 1;
  for(let i = 1; i <= height; i++){
    console.log(printLine(space, ' ') + printLine(line, char));
    if(i <= height/2) {
      space = space -1;
      line = line + 2;
    } else {
      space = space + 1;
      line = line-2;
    }
  }
};

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

const func = function(isX) {
  const next = nextMove(board);
  makeMove(board, next, isX);
  if(!findWinner(board)) {
    func(!isX)
  } else {
    alert("The winner is " + findWinner(board).winner)
  }
};