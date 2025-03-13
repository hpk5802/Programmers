// 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하는 함수
// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.
function solution(number) {
  let result = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) result++;
      }
    }
  }

  return result;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
