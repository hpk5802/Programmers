// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 return하는 함수
// array는 자연수를 담은 길이 1 이상인 배열
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수
function solution(array, divisor) {
  // 배열에서 divisor로 나누어 떨어지는 값만 필터링한 배열을 result에 할당
  const result = array.filter((num) => num % divisor === 0);

  // 빈 배열인 경우 [-1] return, 빈 배열이 아닌 경우 오름차순 정렬한 배열 return
  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); // [5,10]
console.log(solution([2, 36, 1, 3], 1)); // [1,2,3,36]
console.log(solution([3, 2, 6], 10)); // [-1]
