// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 함수
// 최초 풀이
// function solution(k, score) {
//   const que = [];
//   const result = [];
//   score.forEach((s) => {
//     que.push(s);
//     que.sort((a, b) => a - b);
//     if (que.length <= k) {
//       result.push(que[0]);
//     } else {
//       que.splice(0, 1);
//       result.push(que[0]);
//     }
//   });

//   return result;
// }

// splice() 메서드를 사용해서 배열의 첫 번째 요소를 삭제하는 기존 방식에서
// shift() 메서드를 생각해 수정
function solution(k, score) {
  let arr = [];
  score = score.map((s) => {
    // score 배열을 순회하며 점수를 arr 배열에 추가
    arr.push(s);
    // 점수 오름차순 정렬
    arr.sort((a, b) => a - b);
    // arr의 요소 개수가 명예의 전당 k에 도달하면 shift() 메스드를 이용해 배열의 첫 번째 요소 삭제
    if (arr.length > k) {
      arr.shift();
    }
    return arr[0];
  });
  return score;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
