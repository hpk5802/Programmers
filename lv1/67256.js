// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
// 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수
function solution(numbers, hand) {
  let result = '';
  let currentL = [3, 0];
  let currentR = [3, 2];

  numbers.map((number) => {
    number = number === 0 ? 10 : number - 1;
    const row = Math.floor(number / 3);
    const col = number % 3;

    if (col < 1) {
      currentL = [row, col];
      result += 'L';
    } else if (col > 1) {
      currentR = [row, col];
      result += 'R';
    } else {
      const distance_L = Math.abs(row - currentL[0]) + Math.abs(col - currentL[1]);
      const distance_R = Math.abs(row - currentR[0]) + Math.abs(col - currentR[1]);

      if (distance_L === distance_R) {
        if (hand === 'left') {
          currentL = [row, col];
          result += 'L';
        } else {
          currentR = [row, col];
          result += 'R';
        }
      } else if (distance_L < distance_R) {
        currentL = [row, col];
        result += 'L';
      } else {
        currentR = [row, col];
        result += 'R';
      }
    }
  })

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"