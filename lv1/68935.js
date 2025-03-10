// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return하는 함수
// function solution(n) {
//   // 3진법 상태를 담을 배열
//   const stack = [];
//   // 3진법 변환
//   while (n > 0) {
//     stack.push(n % 3);
//     n = Math.floor(n / 3);
//   }
//   return stack
//     .reverse()
//     .reduce((acc, cur, index) => (acc += cur * 3 ** index), 0);
// }

function solution(n) {
  // parseInt, toString 메서드 이용해 진법 변환
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
