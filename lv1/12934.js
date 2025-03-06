// 임의의 양의 정수 n에 대해, n이 양의 정수 x의 제곱근이라면 x+1의 제곱을 return하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 return하는 함수
// 1 ≤ n ≤ 50000000000000
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
