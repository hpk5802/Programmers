// 대문자와 소문자가 섞여있는 문자열 s에서 'p'와 'y'의 개수를 비교해 같으면 true, 다르면 false를 return하는 함수
// 대문자와 소문자 구별 X
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어짐
function solution(s) {
  // 문자열에서 대소문자 구분 없이 'p' 추출해 arr_p에 할당 -> 'p'가 없다면 [] 할당
  const arr_p = s.match(/p/gi) || [];
  // 문자열에서 대소문자 구분 없이 'y' 추출해 arr_y에 할당 -> 'y'가 없다면 [] 할당
  const arr_y = s.match(/y/gi) || [];

  // p와 y의 개수 비교 : 같으면 true, 다르면 false 반환
  return arr_p.length === arr_y.length;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
