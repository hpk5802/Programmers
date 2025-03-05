// 자연수 N의 각 자리수의 합을 구해서 return하는 함수
// N ≤ 100,000,000 자연수
function solution(N) {
  let result = 0;

  // N을 string 타입으로 변환 후 각 자리수를 배열에 저장
  N.toString()
    .split("")
    .forEach((c) => {
      // 각 자리수를 정수로 변환해 result에 더함
      result += parseInt(c);
    });

  return result;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
