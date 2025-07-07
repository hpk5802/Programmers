// 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수
const rank = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5
}

function solution(lottos, win_nums) {
  let correct = 0;
  let zeros = 0;

  lottos.forEach((num) => {
    if (num === 0) zeros++;
    else if (win_nums.includes(num)) correct++;
  })

  return [rank[correct + zeros] || 6, rank[correct] || 6]
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]