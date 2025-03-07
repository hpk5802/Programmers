// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 return하는 함수
// n ≤ 10,000
function solution(n) {
  const word = "수박";
  // '수박' 반복 횟수 : 2글자니까 n / 2한 몫
  const repeatCount = Math.floor(n / 2);
  const rest = n % 2;

  // repeat 메서드로 반복 횟수만큼 '수박' 추가 후 n이 짝수가 아니라면 '수' 추가한 문자열 반환
  return rest > 0
    ? word.repeat(repeatCount).concat("수")
    : word.repeat(repeatCount);
}

console.log(solution(3)); // '수박수'
console.log(solution(4)); // '수박수박'
