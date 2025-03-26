// 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return하는 solution 함수
function solution(answers) {
  // 수포자들이 찍는 방식
  const users = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 정답을 순회하며 각 유저가 맞힌 개수를 반환해 result 배열에 할당
  const result = users.map((user) => {
    // 정답 맞힌 수
    let correctCount = 0;
    answers.map((answer, index) => {
      const idx = index % user.length;

      if (answer === user[idx]) correctCount++;
    });
    return correctCount;
  });

  // 수포자가 맞힌 가장 많은 정답 수
  const max = Math.max(...result);

  // 결과 배열을 순회하며 가장 많은 정답을 맞힌 수포자의 인덱스를 반환
  return result
    .map((r, idx) => {
      if (r === max) return idx + 1;
    })
    .filter((v) => v);
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
