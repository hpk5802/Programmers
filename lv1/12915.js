// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하는 함수
// 인덱스의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
function solution(strings, n) {
  return strings
    .sort() // 인덱스 n의 문자가 같은 경우를 고려해, 먼저 사전순으로 정렬
    .sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt()); // 인덱스 n의 문자를 기준으로 오름차순 정렬
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
