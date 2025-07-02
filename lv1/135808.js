// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때,
// 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수
// 3 ≤ k ≤ 9
// 3 ≤ m ≤ 10
// 7 ≤ score length ≤ 1,000,000 && 1 ≤ score[i] ≤ k
function solution(k, m, score) {
  return score
    .sort((a, b) => b - a) // 최대 이익을 위해 내림차순으로 정렬
    .reduce((acc, s, index) => {
      // 상자를 채울 수 있으면(m개 이상)
      // s(가장 점수가 작은 사과의 점수) * m(한 상자에 들어가는 사과의 수)
      // reduce() 메서드를 이용해 사과 상자의 총 가격을 연산
      return (index + 1) % m === 0 ? acc + s * m : acc;
    }, 0);
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
