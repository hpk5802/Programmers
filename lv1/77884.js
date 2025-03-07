// 입력 num의 약수의 개수가 짝수면 true를 홀수면 false를 return하는 함수
function isDivisorCountEven(num) {
  if (Math.sqrt(num) % 1 === 0) return false;
  return true;
}

// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return하는 함수
function solution(left, right) {
  let result = 0;

  // left 부터 right까지 순회하며 약수의 개수가 짝수면 +, 홀수면 -
  for (let i = left; i <= right; i++) {
    isDivisorCountEven(i) ? (result += i) : (result -= i);
  }

  return result;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
