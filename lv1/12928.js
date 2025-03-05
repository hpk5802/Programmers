// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수
// 0 ≤ n ≤ 3000
function solution(n) {
  let result = 0;

  // 약수의 대칭성을 이용해 sqrt 제곱근까지만 반복
  // 반복 횟수 절반으로 감소
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result += i;
      if (i !== Math.sqrt(n)) {
        result += n / i;
      }
    }
  }

  return result;
}

console.log(solution(12)); // 28
console.log(solution(5)); // 6
