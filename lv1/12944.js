// 정수 배열 arr의 평균값을 return하는 함수
function solution(arr) {
  // reduce 메서드로 arr 배열의 모든 요소를 더하고 arr 배열의 길이로 나눔
  return arr.reduce((acc, num) => acc + num) / arr.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
