// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 return하는 함수
// phone_number는 길이 4이상, 20이하인 문자열
function solution(phone_number) {
  // slice 메서드로 뒷 4자리 visivleNum에 할당
  const visibleNum = phone_number.slice(-4);

  // 뒷 4자리 제외한 나머지 번호 길이만큼 repeat 메서드로 * 반복 후 concat 메서드로 뒷 4자리 붙여 반환
  return "*".repeat(phone_number.length - 4).concat(visibleNum);
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
