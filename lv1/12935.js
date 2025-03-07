// 정수를 저장한 배열 arr 에서 가장 작은 수를 제거한 배열을 return하는 함수
// return하려는 배열이 빈 배열이면 [-1] return
function solution(arr) {
  // 배열의 요소가 1개면 [-1] return
  if (arr.length === 1) return [-1];
  const minimum = Math.min(...arr);

  // filter 메서드로 가장 작은 수 제거한 배열 return
  return arr.filter((num) => num !== minimum);
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
