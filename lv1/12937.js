// 정수 num이 짝수일 경우 "Even", 홀수일 경우 "Odd"를 반환하는 함수
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(solution(3)); // "Odd"
console.log(solution(4)); // "Even"
