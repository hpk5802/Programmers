// 문자열 s가 매개변수로 주어질 때, 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수
function solution(s) {
  const stack = [];
  let result = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (stack.length === 0 || stack[stack.length - 1] === s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (stack.length === 0) {
        result++;
      }
    }
  }

  return result;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3