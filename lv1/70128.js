// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return하는 함수
function solution(a, b) {
  let result = 0;

  a.forEach((num, index) => (result += num * b[index]));
  return result;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
