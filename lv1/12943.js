// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 주어진 수가 1이 될 때까지 몇 번이나 반복해야 하는지 return하는 함수
function solution(n) {
  // 주어진 수가 1이면 0 반환
  if (n === 1) return 0;
  let cnt = 0;

  // 최대 500번 반복
  while (cnt < 500) {
    cnt++;
    // 짝수면 2로 나누고, 홀수면 3을 곱하고 +1
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    if (n === 1) return cnt;
  }

  // 500번 반복 넘기면 -1 반환
  return -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
