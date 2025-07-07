// 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수
function solution(s, skip, index) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const regExp = new RegExp(`[${skip}]`, 'g');
  const filtered = alpha.replace(regExp, '');

  return s.split('').map((word) => {
    const pos = filtered.indexOf(word);

    return filtered[(pos + index) % filtered.length];
  }).join('');
}

console.log(solution("aukks", "wbqd", 5)); // "happy" 