// 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 return하는 함수
// 1 ≤ n ≤ 8000000000
function solution(n) {
  return Number(
    n
      .toString() // 정수를 문자열로 변환
      .split("") // 각 자리수를 요소로 갖는 배열 반환
      .sort((a, b) => b - a) // 내림차순 정렬
      .join("") // 배열의 요소를 문자열로 변환
  ); // 문자열을 Number 타입으로 변환
}

console.log(solution(118372)); // 873211
