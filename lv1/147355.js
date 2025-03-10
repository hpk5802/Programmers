// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수
function solution(t, p) {
  // 부분 문자열이 p보다 작거나 같은 횟수
  let result = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    // sliced 메서드로 i부터 p의 length와 같게 부분 문자열 sliced에 할당
    const sliced = t.slice(i, i + p.length);
    // 부분 문자열이 p보다 작거나 같은 경우 result++;
    if (sliced <= p) result++;
  }

  return result;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3
