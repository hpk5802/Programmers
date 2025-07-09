// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수
function solution(board, moves) {
  let result = 0;
  const stack = [];
  const arrBoard = Array.from({ length: board.length }, (_, i) => board.flat().reverse().filter((b, idx) => {
    if (idx % board.length === i && b > 0) return b;
  })).reverse();

  for (let i = 0; i < moves.length - 1; i++) {
    const doll = arrBoard[moves[i] - 1].pop();
    if (doll) {
      if (stack[stack.length - 1] === doll) {
        stack.pop();
        result += 2;
      } else {
        stack.push(doll);
      }
    }
  }

  return result;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])); // 4
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [1, 2, 3, 4, 5])); // 0