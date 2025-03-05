// 두 정수 a,b 사이에 속한 모든 정수의 합을 return하는 함수
// ex) a=3, b=5 : 3 + 4 + 5 = 12
// a와 b가 같은 경우 둘 중 아무 수나 리턴
// -10,000,000 ≤ a,b ≤ 10,000,000
// a와 b의 대소 관계는 정해져 있지 않음
function solution(a, b) {
  // a와 b가 같은 경우 a 리턴
  if (a === b) return a;

  let result = 0;
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  // 최수 ~ 최대 사이에 속한 모든 정수를 result에 더함
  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
