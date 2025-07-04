// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
function solution(N, stages) {
  let count = stages.length;
  const arr = Array.from({ length: N }, (_, i) => [i + 1, 0])

  stages.forEach((stage) => {
    if (stage > N) return;
    arr[stage - 1][1]++;
  })

  arr.forEach((val) => {
    let divider = count;
    count -= val[1]
    val[1] = val[1] / divider;
  });

  return arr.sort((a, b) => {
    return b[1] - a[1];
  }).map(([key, val]) => key);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]