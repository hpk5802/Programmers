// 정수 x와 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자 n개를 지니는 리스트를 return하는 함수
// -10000000 ≤ x ≤ 10000000
// n ≤ 1000
function solution(x, n) {
  // 크기 n인 배열을 생성하고 x로 채움
  const result = new Array(n).fill(x);
  // 각 요소에 (index+1)를 곱한 배열 반환 [x, 2x, 3x, 4x, ...]
  return result.map((num, index) => num * (index + 1));
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4,-8]
