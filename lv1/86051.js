// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return하는 함수
function solution(numbers) {
  // 0 ~ 9 까지 숫자 배열
  const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // numbers에 없는 숫자만 필터링해서 filtered 배열에 할당
  const filtered = arrNum.filter((num) => !numbers.includes(num));

  // filtered 배열의 요소 합을 반환
  return filtered.reduce((acc, num) => acc + num);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
