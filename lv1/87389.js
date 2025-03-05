// 자연수 n을 x로 나눈 나머지가 1이 되는 가장 작은 자연수 x를 return하는 함수
// 3 ≤ n ≤ 1,000,000
function solution(n) {
  let x = 2;

  // n을 x로 나눈 나머지가 1이 되면 반복을 종료하고 x를 return
  while (n % x !== 1) {
    x++;
  }

  return x;
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
