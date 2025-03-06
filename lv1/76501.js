// 실제 정수들의 합을 구하여 return하는 함수
// absolutes : 정수들의 절댓값을 차례대로 담은 정수 배열
// signs : 정수들의 부호를 차례대로 담은 불리언 배열
function solution(absolutes, signs) {
  let result = 0;

  absolutes.forEach((num, index) => {
    // absolutes 배열을 순회하며 signs 배열의 값이 true면 +, false면 - 처리
    result = signs[index] ? result + num : result - num;
  });

  return result;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
