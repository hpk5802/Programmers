// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return하는 함수
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0 보다 크거나 같고 9보다 작은 정수
function solution(arr) {
  // 연속 숫자 제거한 결과 배열 : stack
  const result = [];
  arr.map((num, index) => {
    // 첫 번째 숫자는 push
    if (index === 0) result.push(num);
    // stack의 마지막 요소와 배열의 요소가 같은 경우(중복)가 아니면 push
    else if (result[result.length - 1] !== num) result.push(num);
  });

  return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
