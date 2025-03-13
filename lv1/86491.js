// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하는 함수
function solution(sizes) {
  // sizes 배열의 각 요소의 0번 인덱스와 1번 인덱스를 비교해, 0번 인덱스가 더 큰 값이 되도록 정렬
  const sorted = sizes.map(([a, b]) => ([a, b] = a > b ? [a, b] : [b, a]));
  let w = 0;
  let h = 0;
  // sorted 배열을 순회하며 모든 명합을 수납할 수 있도록 값을 할당
  sorted.forEach(([a, b], index) => {
    if (index === 0) {
      w = a;
      h = b;
    } else {
      w = Math.max(w, a); // 배열의 각 요소의 0번 인덱스 중 최대값
      h = Math.max(h, b); // 배열의 각 요소의 1번 인덱스 중 최대값
    }
  });

  return w * h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
