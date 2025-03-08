// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
// s는 길이가 1 이상, 8 이하인 문자열
function solution(s) {
  // 길이가 4 또는 6이 아니면 false 리턴
  if (s.length !== 4 && s.length !== 6) return false;
  // 정규식으로 숫자(0-9)가 아닌 문자를 필터링
  return s.match(/[^0-9]/g) === null;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
