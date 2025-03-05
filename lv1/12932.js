// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴하는 함수
// ex) n = 12345 => return: [5,4,3,2,1]
// n ≤ 10,000,000,000
function solution(n) {
  return n
    .toString() // n을 문자열로 변환
    .split("") // 문자열을 각 자릿수로 분리한 배열 생성
    .reverse() // 배열 역순으로 정렬
    .map((item) => parseInt(item)); // 배열의 모든 요소를 정수로 변환
}

console.log(solution(12345)); // [5,4,3,2,1]
