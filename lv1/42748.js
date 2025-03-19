// array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 나온 결과를 배열에 담아 return하는 함수
function solution(array, commands) {
  const result = [];
  commands.forEach((command) => {
    // command 구조분해 할당으로 start, end, index 할당
    const [start, end, index] = command;
    // slice() 메서드를 이용해 start ~ end까지 배열 복사
    // sort() 메서드를 이용해 배열 오름차순 정렬
    // push() 메서드로 배열의 index의 요소를 result에 추가
    result.push(array.slice(start - 1, end).sort((a, b) => a - b)[index - 1]);
  });

  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
