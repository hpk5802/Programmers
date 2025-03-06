// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수
// 1 ≤ x ≤ 10000 이하 정수
function solution(x) {
  const sum = x
    .toString() // 자연수 x를 문자열로 변환
    .split("") // 각 자리수를 요소로하는 배열 반환
    .reduce((acc, next) => acc + Number(next), 0); // reduce 메서드로 자리수의 합을 sum에 할당

  return x % sum === 0;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
