// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수
// arr1과 arr2의 행과 열의 길이는 500을 넘지 않습니다.
/* 
레거시 코드
function solution(arr1, arr2) {
  const result = [];
  const size = arr1[0].length;
  // arr1, arr2 배열 1차원 배열로 평탄화
  const flatArr1 = arr1.flat();
  const flatArr2 = arr2.flat();

  // 평탄화한 배열 덧셈
  const sumArr = flatArr1.map((num, index) => (num += flatArr2[index]));

  // sumArr 배열의 길이가 0일 때까지 요소를 삭제하고 반환된 값은 result 배열에 push
  while (sumArr.length > 0) {
    result.push(sumArr.splice(0, size));
  }

  return result;
}
*/
function solution(arr1, arr2) {
  // map 메서드를 2번 돌려 arr1과 arr2의 각 행과 열의 요소를 더함
  return arr1.map((a, index1) =>
    a.map((b, index2) => (b += arr2[index1][index2]))
  );
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
